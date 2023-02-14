import styled, { css } from 'styled-components';

import Card from '../../components/Card/Card';
import CardMore from '../../components/CardMore/CardMore';
import Title from '../../components/Title/Title';

import breakpoints from '../../global/breakpoints';

export const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const StyledInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledSubTitle = styled.p`
  margin: 0 20px;
  max-width: 600px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.pL};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.5rem;
  @media ${breakpoints.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.titleXS};
    line-height: 1.75rem;
  }
  @media ${breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.titleS};
    line-height: 2rem;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  @media ${breakpoints.mobileL} {
    align-items: flex-start;
  }
`;

export const StyledSliderTitle = styled(Title)`
  margin: 0 0 5px 0;
  text-align: center;
  line-height: 2rem;
  font-size: ${({ theme }) => theme.fontSize.titleXS};
  @media ${breakpoints.mobileL} {
    margin: 0 0 5px 20px;
    font-size: ${({ theme }) => theme.fontSize.titleM};
  }
`;

export const StyledSlider = styled.div`
  overflow: auto;
  gap: 20px;
  display: flex;
  padding: 20px;
  margin-bottom: 60px;
  max-width: 100%;
`;

const cardCss = css`
  min-width: calc(100vw - 75px);

  @media ${breakpoints.mobileL} {
    min-width: 370px;
  }
  @media ${breakpoints.laptopL} {
    min-width: 410px;
    flex: 1;
  }
`;

export const StyledCard = styled(Card)`
  ${cardCss}
`;

export const StyledCardMore = styled(CardMore)`
  ${cardCss}
`;
