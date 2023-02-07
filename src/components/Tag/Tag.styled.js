import styled from 'styled-components/macro';

export const StyledTag = styled.span`
  background-color: ${({ secondary, theme }) => secondary ? theme.color.secondary : theme.color.primaryLight};
  color: ${({ secondary, theme }) => secondary ? theme.color.white : theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.pS};
  width: fit-content;
  padding: 5px 15px;
  border-radius: 50px;
`;
