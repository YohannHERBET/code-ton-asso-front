import { useState } from 'react';
import Button from '../../components/Button/Button';
import { StyledHome } from './Home.styled';
import Input from '../../components/Input/Input';
import buttonColorEnum from '../../global/enums/buttonColorEnum';
import buttonEnum from '../../global/enums/buttonEnum';
import Select from '../../components/Select/Select';
import RegistrationCard from '../../components/RegistrationCard/RegistrationCard';
import image from '../../assets/association-registration.png';

const Home = () => {
  const [select, setSelect] = useState();

  const handleSetSelect = (event) => {
    setSelect(event.target.value);
  };

  return (
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
      <Select
        value={select}
        onChange={handleSetSelect}
        options={[
          { label: 'solo', value: 'solo' },
          { label: 'duo', value: 'duo' },
        ]}
      />
      <RegistrationCard
        slug="/login"
        image={image}
        text="Je suis une association"
      />
    </StyledHome>
  );
};

export default Home;
