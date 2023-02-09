import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import navigation from '../../global/navigation';
import logo from '../../assets/logo.svg';
import close from '../../assets/close.svg';
import burger from '../../assets/burger.svg';
import profil from '../../assets/profil.svg';
import buttonEnum from '../../global/enums/buttonEnum';

import {
  StyledContainer,
  StyledImage,
  StyledMenu,
  StyledMenuItem,
  StyledMenuLink,
  StyledContainerLeft,
  StyledContainerRight,
  StyledProfil,
  StyledLogo,
  StyledButtonConnectionMobile,
  StyledButton,
  StyledButtonMobile,
  StyledSignup,
  StyledButtonContainer,
} from './Navbar.styled';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isLogged = true;

  return (
    <StyledContainer>
      <StyledContainerLeft>
        <StyledLogo
          src={logo}
          onClick={() => {
            navigate('/');
            setIsOpen(false);
          }}
        />
        <StyledMenu isOpen={isOpen}>
          {navigation.map((link) => (
            <StyledMenuItem key={link.title}>
              <StyledMenuLink onClick={() => setIsOpen(false)} to={link.path}>
                {link.title}
              </StyledMenuLink>
            </StyledMenuItem>
          ))}
          {isLogged ? (
            <StyledButtonMobile label="Me déconnecter" variant={buttonEnum.none} onClick={() => setIsOpen(false)} />
          ) : (
            <>
              <StyledButtonConnectionMobile label="Me connecter" variant={buttonEnum.none} onClick={() => navigate('/connexion')} />
              <StyledButtonMobile label="M'inscrire" variant={buttonEnum.none} onClick={() => navigate('/inscription')} />
            </>
          )}
        </StyledMenu>
      </StyledContainerLeft>
      <StyledContainerRight>
        {isLogged && <StyledProfil src={profil} onClick={() => setIsOpen(false)} />}
        {isOpen ? (
          <StyledImage src={close} onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <StyledImage src={burger} onClick={() => setIsOpen(!isOpen)} />
        )}
        {isLogged ? (
          <StyledButton label="Me déconnecter" onClick={() => console.log('me déconnecter')} />
        ) : (
          <StyledButtonContainer>
            <StyledButton label="Me connecter" onClick={() => navigate('/connexion')} />
            <StyledSignup label="M'inscrire" variant={buttonEnum.outline} onClick={() => navigate('/inscription')} />
          </StyledButtonContainer>
        )}
      </StyledContainerRight>
    </StyledContainer>
  );
};

export default Navbar;
