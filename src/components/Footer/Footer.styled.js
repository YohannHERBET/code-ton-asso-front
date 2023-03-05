import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as LogoIcon } from '../../assets/logo-2.svg';
import breakpoints from '../../global/breakpoints';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px 10px;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const StyledLogo = styled(LogoIcon)`
  margin-bottom: 20px;
`;

export const StyledLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  @media ${breakpoints.mobileL} {
    flex-direction: row;
    gap: 30px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.white};
  transition: 0.2s color ease;
  &:hover {
    color: ${({ theme }) => theme.color.secondaryLight};
  }
`;

export const StyledCopyright = styled.p`
  color: ${({ theme }) => theme.color.white};
  opacity: 0.5;
`;
