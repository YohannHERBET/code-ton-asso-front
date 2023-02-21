import styled from 'styled-components/macro';

export const StyledContainerTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
`;

export const StyledTextArea = styled.textarea`
  overflow: hidden;
  text-overflow: ellipsis;
  border: 2px solid
    ${({ error, theme }) =>
      error ? theme.color.tertiary : theme.color.secondary};
  border-radius: 5px;
  padding: 10px 15px;
  background-color: ${({ error, theme }) =>
    error ? theme.color.tertiaryLight : theme.color.white};
  color: ${({ error, theme }) =>
    error ? theme.color.black : theme.color.secondary};
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-size: ${({ theme }) => theme.fontSize.pM};
  &::placeholder {
    color: ${({ error, theme }) =>
      error ? theme.color.tertiary : theme.color.secondaryLight};
  }
  &:focus-visible {
    outline: initial;
  }
`;

export const StyledLabel = styled.label`
  padding: 0 20px 10px 0;
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.fontSize.pM};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const StyledRequired = styled.span`
  color: ${({ theme }) => theme.color.error};
`;

export const StyledError = styled.span`
  padding: 5px 0 0 0;
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.fontSize.pS};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
