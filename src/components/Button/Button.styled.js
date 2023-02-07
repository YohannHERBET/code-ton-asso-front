import styled, { css } from 'styled-components/macro';

const COLOR_SUFFIX = 'Light';

const cssButton = css`
  display: flex;
  margin: 10px;
  box-sizing: border-box;
  padding: 10px 50px;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  font-size: ${({ theme }) => theme.fontSize.pM};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  transition: all ease 0.3s;
`;

export const StyledPrimaryButton = styled.button`
  ${cssButton};
  border: 2px solid ${({ $color, theme }) => theme.color[$color]};
  background-color: ${({ $color, theme }) => theme.color[$color]};
  color: ${({ theme }) => theme.color.white};
  &:hover {
    background-color: ${({ $color, theme }) =>
      theme.color[`${$color}${COLOR_SUFFIX}`]};
    color: ${({ $color, theme }) => theme.color[$color]};
  }
`;

export const StyledSecondaryButton = styled.button`
  ${cssButton};
  border: 2px solid ${({ $color, theme }) => theme.color[$color]};
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ $color, theme }) => theme.color[$color]};
  &:hover {
    background-color: ${({ $color, theme }) => theme.color[$color]};
    color: ${({ theme }) => theme.color.white};
  }
`;

export const StyledTertiaryButton = styled.button`
  ${cssButton};
  border: 2px solid transparent;
  background-color: transparent;
  color: ${({ $color, theme }) => theme.color[$color]};
  &:hover {
    background-color: ${({ $color, theme }) =>
      theme.color[`${$color}${COLOR_SUFFIX}`]};
  }
`;
