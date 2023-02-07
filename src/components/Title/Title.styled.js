import styled from 'styled-components/macro';
import breakpoints from '../../global/breakpoints';

export const h1 = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: ${({ theme }) => theme.fontSize.titleL};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  @media ${breakpoints.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.titleXL};
  }
  @media ${breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.titleXXL};
  }
`;

export const h2 = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: ${({ theme }) => theme.fontSize.titleM};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  @media ${breakpoints.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.titleL};
  }
  @media ${breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.titleXL};
  }
`;

export const h3 = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: ${({ theme }) => theme.fontSize.titleXS};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  @media ${breakpoints.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.titleM};
  }
  @media ${breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.titleL};
  }
`;

export const h4 = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: ${({ theme }) => theme.fontSize.pL};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  @media ${breakpoints.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.titleXS};
  }
  @media ${breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.titleM};
  }
`;
