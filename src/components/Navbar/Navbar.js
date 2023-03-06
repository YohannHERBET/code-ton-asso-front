import { useContext, useState, useRef, useEffect } from 'react';
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
import { UserContext } from '../../context/userContext';
import cardTypeEnum from '../../global/enums/cardTypeEnum';
import buttonColorEnum from '../../global/enums/buttonColorEnum';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { authUser, removeUser } = useContext(UserContext);
  const navbarRef = useRef(null);

  const disconnect = () => {
    setIsOpen(false);
    removeUser();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navbarRef]);

  const navbarList = navigation
    .filter((link) => {
      if (link.for) {
        if (authUser?.associationId) {
          return link.for === cardTypeEnum.association;
        }
        if (authUser?.developerId) {
          return link.for === cardTypeEnum.developer;
        }
        return false;
      }
      return true;
    })
    .map((link) => (
      <StyledMenuItem key={link.title}>
        <StyledMenuLink onClick={() => setIsOpen(false)} to={link.path}>
          {link.title}
        </StyledMenuLink>
      </StyledMenuItem>
    ));

  return (
    <StyledContainer ref={navbarRef}>
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
          {navbarList}
          {authUser ? (
            <StyledButtonMobile
              label="Me déconnecter"
              variant={buttonEnum.none}
              onClick={disconnect}
            />
          ) : (
            <>
              <StyledButtonConnectionMobile
                label="Me connecter"
                variant={buttonEnum.none}
                to="/connexion"
                onClick={() => setIsOpen(false)}
              />
              <StyledButtonMobile
                label="M'inscrire"
                variant={buttonEnum.none}
                to="/inscription"
                onClick={() => setIsOpen(false)}
              />
            </>
          )}
        </StyledMenu>
      </StyledContainerLeft>
      <StyledContainerRight>
        {authUser && (
          <StyledLink to="/profil">
            <StyledProfil src={profil} onClick={() => setIsOpen(false)} />
          </StyledLink>
        )}
        {isOpen ? (
          <StyledImage src={close} onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <StyledImage src={burger} onClick={() => setIsOpen(!isOpen)} />
        )}
        {authUser ? (
          <StyledButton
            label="Me déconnecter"
            onClick={disconnect}
            variant={buttonEnum.fill}
            color={buttonColorEnum.secondary}
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
