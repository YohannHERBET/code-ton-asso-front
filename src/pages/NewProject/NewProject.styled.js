import styled from 'styled-components';

import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import TextArea from '../../components/TextArea/TextArea';
import Button from '../../components/Button/Button';

export const StyledNewProject = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-top: 60px;
`;

export const StyledTitle = styled(Title)``;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  max-width: 700px;
  width: 100%;
  padding: 0 10px;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  input {
    width: 100%;
  }
`;

export const StyledSelect = styled(Select)`
  width: 100%;
`;

export const StyledTextArea = styled(TextArea)`
  width: 100%;
  textarea {
    width: 100%;
    min-height: 125px;
    resize: none;
  }
`;

export const StyledButton = styled(Button)`
  align-self: center;
`;
