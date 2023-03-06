import styled from 'styled-components/macro';

import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';
import breakpoints from '../../global/breakpoints';

export const StyledProject = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 100px;
`;

export const StyledInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 10px;
  @media ${breakpoints.laptop} {
    flex-direction: row;
    gap: 100px;
    margin: 0 100px;
  }
  @media ${breakpoints.tablet} {
    flex-direction: row;
  }
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: 10px;
`;

export const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 40px;
`;

export const StyledName = styled.p`
  text-align: center;
  @media ${breakpoints.tablet} {
    text-align: left;
  }
`;

export const StyledTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.titleXS};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-align: center;
  @media ${breakpoints.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.titleM};
  }
  @media ${breakpoints.tablet} {
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.titleL};
  }
`;

export const StyledAssociationName = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.pM};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: 40px;
  text-align: center;
  @media ${breakpoints.tablet} {
    margin-bottom: 10px;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.pL};
  }
`;

export const StyledSubTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.pM};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin-bottom: 10px;
  @media ${breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.pL};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const StyledDescription = styled.p`
  line-height: 1.4rem;
`;

export const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  background-color: ${({ theme }) => theme.color.grey10};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

export const StyledBlock = styled.div``;

export const StyledFeature = styled.p`
  display: inline;
  line-height: 1.4rem;
`;

export const StyledDevelopers = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ hasDevelopers }) => (hasDevelopers ? '10px' : '0')};
  margin: 0 10px;
  @media ${breakpoints.laptop} {
    margin: 0 100px;
  }
`;

export const StyledCard = styled(Card)`
  flex: 1;
  width: 100%;
`;

export const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  @media ${breakpoints.tablet} {
    flex-direction: row;
  }
`;

export const StyledFeaturesList = styled.ul`
  list-style-position: inside;
  list-style-type: disc;
`;

export const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${breakpoints.tablet} {
    flex-direction: row;
  }
`;
