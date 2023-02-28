import styled from 'styled-components/macro';
import Title from '../../../components/Title/Title';
import RegistrationCard from '../../../components/RegistrationCard/RegistrationCard';
import breakpoints from '../../../global/breakpoints';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContainerCards = styled.div`
  @media ${breakpoints.tablet} {
    display: flex;
    width: 52rem;
    justify-content: space-evenly;
  }
  @media ${breakpoints.laptopL} {
    display: flex;
    width: 85rem;
    justify-content: space-evenly;
  }
`;

export const StyledTitle = styled(Title)`
  margin: 2rem 0;
  @media ${breakpoints.tablet} {
    margin: 2rem 0 3rem 0;
  }
  @media ${breakpoints.laptopL} {
    margin: 3rem 0 4rem 0;
  }
`;

export const StyledRegistrationCard = styled(RegistrationCard)`
  margin-bottom: 1.8rem;
`;
