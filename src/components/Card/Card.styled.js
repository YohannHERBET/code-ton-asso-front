import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as ProjectIcon } from '../../assets/project.svg';
import { ReactComponent as AssociationIcon } from '../../assets/association.svg';
import { ReactComponent as DeveloperIcon } from '../../assets/developer.svg';
import { ReactComponent as ArrowIcon } from '../../assets/arrow-card.svg';
import Title from '../Title/Title';

export const StyledLink = styled(Link)`
  flex: 1;
`;

export const StyledArrow = styled(ArrowIcon)`
  position: absolute;
  top: 0;
  right: 0;
  width: 35px;
  height: 35px;
`;

export const StyledCard = styled.article`
  display: flex;
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.color.grey50};
  border-radius: 5px;
  max-width: 410px;
  max-height: 341px;
  transition: all 0.3s ease;
  &:hover {
    ${StyledArrow} {
      circle {
        fill: ${({ theme }) => theme.color.primary};
      }
      path {
        fill: white;
      }
    }
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

export const StyledTextContainer = styled.div`
  position: relative;
  margin: 20px;
`;

export const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border-radius: 5px 5px 0 0;
  background-color: ${({ theme }) => theme.color.grey10};
`;

export const StyledIcon = css`
  width: 100px;
  height: 100px;
`;

export const StyledProjectIcon = styled(ProjectIcon)`
  ${StyledIcon}
`;

export const StyledAssociationIcon = styled(AssociationIcon)`
  ${StyledIcon}
`;

export const StyledDeveloperIcon = styled(DeveloperIcon)`
  ${StyledIcon}
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 7px;
  font-size: ${({ theme }) => theme.fontSize.titleXS};
  line-height: 1.75rem;
  width: 85%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const StyledText = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  line-height: 1.4rem;
`;
