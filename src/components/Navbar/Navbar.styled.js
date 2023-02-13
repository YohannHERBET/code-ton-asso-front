import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import breakpoints from '../../global/breakpoints';
import Button from '../Button/Button';

const cssFirstButton = css`
  background-color: ${({ theme }) => theme.color.white};
  padding: 7px 40px;
  @media ${breakpoints.tablet} {
    display: none;
  }
`;

const cssSecondButton = css`
  display: none;
  @media ${breakpoints.tablet} {
    display: flex;
    padding: 5px 6px;
    font-size: 13px;
    width: max-content;
  }
  @media ${breakpoints.laptop} {
    font-size: 15px;
    padding: 5px 10px;
  }
`;

export const StyledContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0 15px;
  box-shadow: 0px 1px 10px ${({ theme }) => theme.color.grey50};
`;

export const StyledImage = styled.img`
  margin: 0;
  font-size: 22px;
  cursor: pointer;
  @media ${breakpoints.tablet} {
    display: none;
  }
`;

export const StyledProfil = styled.img`
  margin-right: 12px;
  @media ${breakpoints.tablet} {
    margin: 0;
  }
`;

export const StyledLogo = styled.img`
  width: 10rem;
  @media ${breakpoints.laptop} {
    width: 12rem;
  }
`;

export const StyledMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  list-style: none;
  margin: 0;
  padding: 20px 0;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-size: ${({ theme }) => theme.fontSize.pL};

  @media ${breakpoints.tablet} {
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.pM};
    margin-left: 1em;
    padding: 0;
    display: flex;
    flex-direction: row;
    position: static;
    background-color: transparent;
  }
`;

export const StyledMenuItem = styled.li`
  padding: 10px 0;

  @media ${breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.pS};
    margin-right: 20px;
  }
  @media ${breakpoints.laptop} {
    font-size: ${({ theme }) => theme.fontSize.pM};
  }
`;

export const StyledMenuLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
  transition: 0.1s all ease;
  @media ${breakpoints.tablet} {
    color: ${({ theme }) => theme.color.black};
    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const StyledContainerLeft = styled.div`
  display: flex;
`;

export const StyledContainerRight = styled.div`
  display: flex;
`;

export const StyledButton = styled(Button)`
  ${cssSecondButton};
`;

export const StyledButtonMobile = styled(Button)`
  margin-bottom: 1rem;
  ${cssFirstButton};
`;

export const StyledButtonConnectionMobile = styled(Button)`
  ${cssFirstButton};
`;

export const StyledSignup = styled(Button)`
  ${cssSecondButton};
  @media ${breakpoints.tablet} {
    margin: 10px 0;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;
