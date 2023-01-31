import Button from '../../components/Button/Button';
import { StyledHome } from './Home.styled';

import buttonColorEnum from '../../global/enums/buttonColorEnum';
import buttonEnum from '../../global/enums/buttonEnum';

const Home = () => (
  <StyledHome>
    <Button label="Button" />
    <Button label="Button" color={buttonColorEnum.secondary} />
    <Button label="Button" color={buttonColorEnum.danger} />
    <Button label="Button" variant={buttonEnum.outline} />
    <Button
      label="Button"
      color={buttonColorEnum.secondary}
      variant={buttonEnum.outline}
    />
    <Button
      label="Button"
      color={buttonColorEnum.danger}
      variant={buttonEnum.outline}
    />
    <Button label="Button" variant={buttonEnum.none} />
    <Button
      label="Button"
      color={buttonColorEnum.secondary}
      variant={buttonEnum.none}
    />
    <Button
      label="Button"
      color={buttonColorEnum.danger}
      variant={buttonEnum.none}
    />
  </StyledHome>
);

export default Home;
