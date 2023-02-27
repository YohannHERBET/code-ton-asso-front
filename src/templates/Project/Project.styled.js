import styled from 'styled-components';

import Title from '../../components/Title/Title';
import breakpoints from '../../global/breakpoints';

export const StyledProject = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const StyledInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 10px;
  @media ${breakpoints.laptop} {
    flex-direction: row;
    gap: 100px;
    margin: 0 100px;
  }
  @media ${breakpoints.tablet} {
    flex-direction: row;
    margin: 0 100px;
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
  gap: 30px;
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

export const StyledSubTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.pM};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: 10px;
  text-align: center;
  @media ${breakpoints.tablet} {
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.pL};
  }
`;

export const StyledDescription = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
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

export const StyledFeature = styled.p``;
