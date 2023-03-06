import styled from 'styled-components';
import CardList from '../../components/CardList/CardList';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';

export const StyledList = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin: 60px 0 100px 0;
`;

export const StyledInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledCardList = styled(CardList)``;

export const StyledButton = styled(Button)`
  margin-top: 50px;
`;
