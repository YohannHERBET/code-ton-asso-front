import styled from 'styled-components';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import breakpoints from '../../global/breakpoints';

export const StyledConnectionContainer = styled.div`
  margin: 5vh auto;
  padding: 2rem 1rem;
  width: 90%;
  border-radius: 5px;
  box-shadow: 0px 1px 10px ${({ theme }) => theme.color.grey50};
  @media ${breakpoints.tablet} {
    padding: 2rem 6rem;
    width: 70%;
  }
  @media ${breakpoints.laptop} {
    padding: 2rem 5rem;
    width: 50%;
    margin: 8vh auto;
  }
  @media ${breakpoints.laptopL} {
    padding: 2rem 10rem;
    width: 800px;
  }
`;

export const StyledContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledTitle = styled(Title)`
  padding-bottom: 3rem;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled(Input)`
  margin-bottom: 20px;
  width: 100%;
  & .classNameInput {
    width: 100%;
  }
`;

export const StyledForgotPassword = styled.span`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const StyledButton = styled(Button)`
  width: 100%;
  justify-content: center;
`;

export const StyledErrorMessage = styled.span`
  color: ${({ theme }) => theme.color.error};
  font-size: 0.8em;
  margin-bottom: 20px;
`;

export const StyledSpan = styled.span`
  margin: 1rem;
  color: ${({ theme }) => theme.color.grey50};
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.titleXS};
`;
