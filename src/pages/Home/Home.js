import Button from '../../components/Button/Button';
import { StyledHome } from './Home.styled';
import Input from '../../components/Input/Input';
import buttonColorEnum from '../../global/enums/buttonColorEnum';
import buttonEnum from '../../global/enums/buttonEnum';

const Home = () => (
  <StyledHome>
    <Button label="Button" onClick={() => console.log('test input')} />
    <Button label="Button" color={buttonColorEnum.secondary} />
    <Button label="Button" color={buttonColorEnum.tertiary} />
    <Button label="Button" variant={buttonEnum.outline} />
    <Button
      label="Button"
      color={buttonColorEnum.secondary}
      variant={buttonEnum.outline}
    />
    <Button
      label="Button"
      color={buttonColorEnum.tertiary}
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
      color={buttonColorEnum.tertiary}
      variant={buttonEnum.none}
    />
    <Input
      error="mot de passe incorrect"
      value=""
      onChange={() => console.log('test input')}
      label="Titre de votre projet"
      name="titleProject"
      placeholder="Application mobile pour cuisine"
      required
    />
    <Input
      value=""
      onChange={() => console.log('test input')}
      label="Titre de votre projet"
      name="titleProject"
      placeholder="Application mobile pour cuisine"
    />
  </StyledHome>
);

export default Home;
