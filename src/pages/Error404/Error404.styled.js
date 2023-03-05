import styled from 'styled-components/macro';
import Title from '../../components/Title/Title';

export const StyledError404 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 100px;
`;

export const Styled404 = styled(Title)`
  text-align: center;
`;

export const StyledText = styled.p`
  text-align: center;
  font-size: 2rem;
`;
