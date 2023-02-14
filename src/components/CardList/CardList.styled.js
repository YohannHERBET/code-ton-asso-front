import styled from 'styled-components';
import breakpoints from '../../global/breakpoints';

import Card from '../Card/Card';

export const StyledCardList = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;
  grid-gap: 20px;
  margin: 0 20px;
  @media ${breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${breakpoints.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${breakpoints.laptopL} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StyledCard = styled(Card)`
  width: 100%;
  @media ${breakpoints.laptopL} {
    min-width: 410px;
  }
`;
