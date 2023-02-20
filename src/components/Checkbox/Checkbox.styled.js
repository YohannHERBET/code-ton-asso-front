import styled from 'styled-components/macro';

export const StyledCheckbox = styled.input`
  appearance: none;
  background-color: ${({ checked, theme }) =>
    checked ? theme.color.secondary : theme.color.white};
  border: 1px solid
    ${({ checked, theme }) =>
      checked ? theme.color.secondary : theme.color.black};
  border-radius: 5px;
  height: 15px;
  width: 15px;
  position: relative;
  outline: none;
  margin-right: 10px;
  &:before {
    content: '✔';
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    color: ${({ theme }) => theme.color.white};
  }
`;
