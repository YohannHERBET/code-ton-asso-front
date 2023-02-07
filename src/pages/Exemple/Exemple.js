import { useState } from 'react';
import Button from '../../components/Button/Button';
import { StyledExemple } from './Exemple.styled';
import Input from '../../components/Input/Input';
import buttonColorEnum from '../../global/enums/buttonColorEnum';
import buttonEnum from '../../global/enums/buttonEnum';
import Select from '../../components/Select/Select';
import RegistrationCard from '../../components/RegistrationCard/RegistrationCard';
import image from '../../assets/association-registration.png';
import Card from '../../components/Card/Card';
import cardTypeEnum from '../../global/enums/cardTypeEnum';
import Tag from '../../components/Tag/Tag';
import titleEnum from '../../global/enums/titleEnum';
import Title from '../../components/Title/Title';

const Exemple = () => {
  const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
  ];
  const options2 = [
    {
      value: 'Se crer un compte utilisateur',
      label: 'Se crer un compte utilisateur',
    },
    {
      value: 'Se connecter/se déconnecter',
      label: 'Se connecter/se déconnecter',
    },
    {
      value: 'Une barre de recherche',
      label: 'Une barre de recherche',
    },
    {
      value: 'Une carte',
      label: 'Une carte',
    },
  ];
  const [select, setSelect] = useState({});
  const [select2, setSelect2] = useState([]);
  return (

    <StyledExemple>
      <Title variant={titleEnum.h1} content="le titre de cette merde" />
      <Tag text="frontend" />
      <Tag text="backend" secondary />
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
        name="titleProject2"
        placeholder="Application mobile pour cuisine"
      />
      <Select
        value={select}
        onChange={(event) => setSelect(event)}
        options={options}
        label="Label du Select simple"
      />
      <Select
        value={select2}
        onChange={(event2) => setSelect2(event2)}
        options={options2}
        isMulti
        required
        label="Label du Select à choix multiple"
        error="le champ est requis !"
      />
      <RegistrationCard
        slug="/login"
        image={image}
        text="Je suis une association"
      />
      <Card
        title="Test titre"
        slug="/article"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis turpis suscipit, facilisis justo vitae, lobortis turpis. Quisque mauris urna, feugiat at ipsum ac, lacinia dictum lectus. Sed finibus urna gravida facilisis sollicitudin. Cras pretium gravida justo quis dignissim. Aliquam at varius massa. Ut quis nisi varius"
      />
      <Card
        title="Test titre"
        slug="/article"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis turpis suscipit, facilisis justo vitae, lobortis turpis. Quisque mauris urna, feugiat at ipsum ac, lacinia dictum lectus. Sed finibus urna gravida facilisis sollicitudin. Cras pretium gravida justo quis dignissim. Aliquam at varius massa. Ut quis nisi varius"
        type={cardTypeEnum.association}
      />
      <Card
        title="Test titre"
        slug="/article"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis turpis suscipit, facilisis justo vitae, lobortis turpis. Quisque mauris urna, feugiat at ipsum ac, lacinia dictum lectus. Sed finibus urna gravida facilisis sollicitudin. Cras pretium gravida justo quis dignissim. Aliquam at varius massa. Ut quis nisi varius"
        type={cardTypeEnum.developer}
      />
      <Card
        title="Test titre"
        slug="/article"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis turpis suscipit, facilisis justo vitae, lobortis turpis. Quisque mauris urna, feugiat at ipsum ac, lacinia dictum lectus. Sed finibus urna gravida facilisis sollicitudin. Cras pretium gravida justo quis dignissim. Aliquam at varius massa. Ut quis nisi varius"
        type={cardTypeEnum.developer}
        imageUrl="https://www.pagesjaunes.fr/media/ugc/croix_rouge_francaise_03523800_201833550"
      />
    </StyledExemple>
  );
};
export default Exemple;
