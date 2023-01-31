import styled from 'styled-components/macro';
// import breakpoints from '../../global/breakpoints';

export const StyledContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
`;

export const StyledInput = styled.input`
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
  font-size: ${({ theme }) => theme.fontSize.pM};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  &::placeholder {
    color: ${({ error, theme }) =>
      error ? theme.color.tertiary : theme.color.secondaryLight};
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
