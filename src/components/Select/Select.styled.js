import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
  .select__control {
    border: 2px solid
      ${({ error, theme }) =>
        error ? theme.color.tertiary : theme.color.secondary};
    &:hover {
      border-color: ${({ error, theme }) =>
        error ? theme.color.tertiary : theme.color.secondary} !important;
    }
  }

  .select__placeholder {
    color: ${({ theme }) => theme.color.secondaryLight};
  }
  .css-t3ipsp-control {
    border-color: ${({ theme }) => theme.color.secondary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.secondary};
  }
`;

export const StyledContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledError = styled.span`
  padding: 5px 0 0 0;
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.fontSize.pS};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const StyledRequired = styled.span`
  color: ${({ theme }) => theme.color.error};
`;

export const StyledLabel = styled.label`
  padding: 0 20px 10px 0;
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.fontSize.pM};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
