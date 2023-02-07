import styled from 'styled-components';

import Title from '../../components/Title/Title';

export const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
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
`;

export const StyledSubTitle = styled(Title)`
  margin-bottom: 20px;
`;

export const StyledParagraph = styled.p`
  text-align: center;
`;

export const StyledSlider = styled.section`
  gap: 20px;
  display: flex;
  margin-bottom: 60px;
`;
