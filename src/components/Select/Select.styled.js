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
  .css-t3ipsp-control {
    border-color: ${({ theme }) => theme.color.secondary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.secondary};
  }
  .select__value-container {
  }
  .select__input-container {
  }
  .select__placeholder {
  }
`;

export const StyledContainerSelect = styled.div``;

export const StyledError = styled.span``;
