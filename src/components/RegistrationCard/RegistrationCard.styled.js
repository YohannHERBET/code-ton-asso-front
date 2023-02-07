import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import breakpoints from '../../global/breakpoints';
import { ReactComponent as ArrowIcon } from '../../assets/arrow-card.svg';

export const StyledContainerRegistrationCard = styled(Link)`
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.color.grey50};
  border-radius: 5px;
  width: 17rem;
  height: 17rem;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: all 0.3s ease;
  outline: 3px solid transparent;
  @media ${breakpoints.laptopL} {
    width: 27rem;
    height: 27rem;
    box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.color.grey50};
  }
  &:hover {
    outline: 3px solid ${({ theme }) => theme.color.primary};
    circle {
      fill: ${({ theme }) => theme.color.primary};
    }
    path {
      fill: white;
    }
  }
  &:hover&:before {
    opacity: 0.3;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.grey25};
    opacity: 0.5;
  }
`;

export const StyledArrowRegistrationCard = styled(ArrowIcon)`
  position: absolute;
  bottom: 17px;
  right: 16px;
  width: 35px;
  @media ${breakpoints.laptopL} {
    bottom: 17px;
    right: 26px;
    width: 60px;
    height: 60px;
  }
`;

export const StyledtextRegistrationCard = styled.p`
  position: absolute;
  bottom: 30%;
  text-align: center;
  width: 100%;
  padding: 0 10px;
  font-size: ${({ theme }) => theme.fontSize.titleS};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-family: ${({ theme }) => theme.fontFamily.text};
  @media ${breakpoints.laptopL} {
    font-size: ${({ theme }) => theme.fontSize.titleXL};
  }
`;
