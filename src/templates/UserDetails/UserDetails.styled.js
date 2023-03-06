import styled from 'styled-components/macro';
import Card from '../../components/Card/Card';
import Tag from '../../components/Tag/Tag';
import Title from '../../components/Title/Title';
import { ReactComponent as TeamIcon } from '../../assets/team.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import breakpoints from '../../global/breakpoints';

export const StyledUser = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 100px;
`;

export const StyledInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 10px;
  @media ${breakpoints.laptop} {
    gap: 60px;
    margin: 0 100px;
  }
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
  line-height: 1.4rem;
`;

export const StyledNoProjectDescription = styled.p`
  line-height: 1.4rem;
  text-align: center;
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

export const StyledTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  @media ${breakpoints.mobileM} {
    margin-right: 10px;
  }
  @media ${breakpoints.tablet} {
    justify-content: left;
  }
`;

export const StyledTag = styled(Tag)`
  @media ${breakpoints.mobileM} {
    margin-right: 10px;
  }
`;

export const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ hasProjects }) => (hasProjects ? '10px' : '0')};
  /* margin: 0 10px; */
  /* @media ${breakpoints.laptop} {
    margin: 0 100px;
  } */
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

export const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  @media ${breakpoints.tablet} {
    margin-left: 50px;
  }
`;

export const StyledWorkPref = styled.div`
  display: flex;
  justify-content: center;
  @media ${breakpoints.tablet} {
    justify-content: left;
  }
`;

export const StyledTeamIcon = styled(TeamIcon)``;

export const StyledUserIcon = styled(UserIcon)``;

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${breakpoints.tablet} {
    flex-direction: row;
  }
`;

export const StyledUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const StyledContainerLeft = styled.div``;

export const StyledContainerRight = styled.div``;

export const StyledBlock = styled.div``;
