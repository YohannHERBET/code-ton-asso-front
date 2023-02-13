import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Title from '../Title/Title';

export const StyledCardMore = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.color.grey50};
  border-radius: 5px;
  width: 410px;
  height: 341px;
  min-width: 410px;
  transition: all 0.3s ease;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  &:hover {
    path {
      fill: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const StyledTitle = styled(Title)`
  width: 220px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.titleXS};
`;
