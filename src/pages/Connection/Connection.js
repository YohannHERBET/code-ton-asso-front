import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import titleEnum from '../../global/enums/titleEnum';
import buttonEnum from '../../global/enums/buttonEnum';

import {
  StyledConnectionContainer,
  StyledContainerLeft,
  StyledContainerRight,
  StyledTitle,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledErrorMessage,
  StyledSpan,
  StyledForgotPassword,
} from './Connection.styled';
import { getAuth } from '../../utils/fetchAPI';
import { UserContext } from '../../context/userContext';

const Connection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { handleSetAuthUser } = useContext(UserContext);

  useEffect(() => {
    if (Cookies.get('token')) {
      navigate('/');
    }
  }, [email, password]);

  const login = async () => {
    try {
      const { token } = await getAuth({ email, password });
      // 1h = 1j / 24h
      Cookies.set('token', token, { expires: 1 / 24 });
      handleSetAuthUser();
      navigate('/');
    } catch (error) {
      console.error(error);
      setErrorMessage(
        'Votre email ou mot de passe est incorrect, veuillez réessayer'
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login();
  };

  return (
    <StyledConnectionContainer>
      <StyledTitle variant={titleEnum.h1} content="Connexion" />
      <StyledForm onSubmit={handleSubmit}>
        <StyledContainerLeft>
          <StyledInput
            type="email"
            label="Email"
            placeholder="Entrez votre email"
            classNameInput="classNameInput"
            name="email-connection"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledInput
            type="password"
            label="Mot de passe"
            classNameInput="classNameInput"
            placeholder="Entrez votre mot de passe"
            name="password-connection"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </StyledContainerLeft>
        <StyledForgotPassword>
          J'ai oublié mon mot de passe
        </StyledForgotPassword>
        <StyledContainerRight>
          {errorMessage && (
            <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
          )}
          <StyledButton label="Me connecter" type="submit">
            Connexion
          </StyledButton>
          <StyledSpan>ou</StyledSpan>
          <StyledButton
            label="M'inscrire"
            variant={buttonEnum.outline}
            onClick={() => navigate('/inscription')}
          />
        </StyledContainerRight>
      </StyledForm>
    </StyledConnectionContainer>
  );
};

export default Connection;
