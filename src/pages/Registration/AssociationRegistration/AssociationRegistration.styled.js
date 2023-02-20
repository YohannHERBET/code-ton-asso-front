import styled from 'styled-components/macro';
import Title from '../../../components/Title/Title';
import Input from '../../../components/Input/Input';
import TextArea from '../../../components/TextArea/TextArea';
import Select from '../../../components/Select/Select';
import Button from '../../../components/Button/Button';

export const StyledInscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledTitle = styled(Title)`
  margin: 2rem 0;
`;
export const StyledList = styled.ul`
  list-style: disc;
  margin: 0 0 2rem 2rem;
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
export const StyledListItem = styled.li`
  margin-bottom: 2px;
`;
export const StyledForm = styled.form`
  max-width: 700px;
  width: 100%;
  padding: 0 20px;
`;
export const StyledInput = styled(Input)`
  width: 100%;
  margin-bottom: 1rem;
`;
export const StyledTextArea = styled(TextArea)`
  width: 100%;
  margin-bottom: 1rem;
`;
export const StyledButton = styled(Button)`
  width: 100%;
  margin: 1rem 0 1rem 0;
`;
export const StyledSelect = styled(Select)`
  margin-bottom: 1rem;
  .select__placeholder {
    color: ${({ theme }) => `${theme.color.secondary}9c`};
  }
`;
export const StyledText = styled.p`
  margin-top: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-size: ${({ theme }) => theme.fontSize.pS};
`;
export const StyledError = styled.span`
  color: ${({ theme }) => theme.color.error};
  font-size: 0.8em;
  margin-bottom: 20px;
`;
