import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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

const Connection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (email === 'admin@admin.com' && password === 'password') {
    //   console.log('Connexion réussie');
    // } else {
    //   setErrorMessage(
    //     'Votre email ou mot de passe est incorrect, veuillez réessayer'
    //   );
    // }
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        navigate('/accueil');
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(
          'Votre email ou mot de passe est incorrect, veuillez réessayer'
        );
      });
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
            name="email-connection"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledInput
            type="password"
            label="Mot de passe"
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
