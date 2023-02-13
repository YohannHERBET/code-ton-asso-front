import { useState } from 'react';
import navigation from '../../global/navigation';
import logo from '../../assets/logo.svg';
import close from '../../assets/close.svg';
import burger from '../../assets/burger.svg';
import profil from '../../assets/profil.svg';
import buttonEnum from '../../global/enums/buttonEnum';

import {
  StyledContainer,
  StyledImage,
  StyledLink,
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
  const isLogged = true;

  return (
    <StyledContainer>
      <StyledContainerLeft>
        <StyledLink to="/">
          <StyledLogo
            src={logo}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </StyledLink>
        <StyledMenu isOpen={isOpen}>
          {navigation.map((link) => (
            <StyledMenuItem key={link.title}>
              <StyledMenuLink onClick={() => setIsOpen(false)} to={link.path}>
                {link.title}
              </StyledMenuLink>
            </StyledMenuItem>
          ))}
          {isLogged ? (
            <StyledButtonMobile
              label="Me déconnecter"
              variant={buttonEnum.none}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <>
              <StyledButtonConnectionMobile
                label="Me connecter"
                variant={buttonEnum.none}
                to="/connexion"
              />
              <StyledButtonMobile
                label="M'inscrire"
                variant={buttonEnum.none}
                to="/inscription"
              />
            </>
          )}
        </StyledMenu>
      </StyledContainerLeft>
      <StyledContainerRight>
        {isLogged && (
          <StyledLink to="/profil">
            <StyledProfil src={profil} onClick={() => setIsOpen(false)} />
          </StyledLink>
        )}
        {isOpen ? (
          <StyledImage src={close} onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <StyledImage src={burger} onClick={() => setIsOpen(!isOpen)} />
        )}
        {isLogged ? (
          <StyledButton
            label="Me déconnecter"
            onClick={() => console.log('me déconnecter')}
          />
        ) : (
          <StyledButtonContainer>
            <StyledButton label="Me connecter" to="/connexion" />
            <StyledSignup
              label="M'inscrire"
              variant={buttonEnum.outline}
              to="/inscription"
            />
          </StyledButtonContainer>
        )}
      </StyledContainerRight>
    </StyledContainer>
  );
};

export default Navbar;
