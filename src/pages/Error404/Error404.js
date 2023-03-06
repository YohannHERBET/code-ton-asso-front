import titleEnum from '../../global/enums/titleEnum';
import { Styled404, StyledError404, StyledText } from './Error404.styled';

const Error404 = () => (
  <StyledError404>
    <Styled404 content={404} variant={titleEnum.h1} />
    <StyledText>La page que vous recherchez semble introuvable.</StyledText>
  </StyledError404>
);

export default Error404;
