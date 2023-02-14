import { useState } from 'react';
import titleEnum from '../../../global/enums/titleEnum';

import {
  StyledInscriptionContainer,
  StyledTitle,
  StyledList,
  StyledListItem,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledTextArea,
  StyledText,
  StyledSelect,
} from './AssociationRegistration.styled';

const AssociationRegistration = () => {
  const [formValues, setFormValues] = useState({
    associationName: '',
    rna: '',
    description: '',
    name: '',
    firstname: '',
    email: '',
    password: '',
    confirmPassword: '',
    categories: [],
  });

  const handleChange = (event, type) => {
    if (!event.target && type === 'select') {
      return setFormValues({ ...formValues, categories: event });
    }
    const { name, value } = event.target;
    return setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulaire soumis pour inscription d'une association");
  };

  const options = [
    {
      value: 'Se créer un compte utilisateur',
      label: 'Se créer un compte utilisateur',
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

  return (
    <StyledInscriptionContainer>
      <StyledTitle variant={titleEnum.h1} content="Inscription" />
      <StyledList>
        <StyledListItem>Durée estimée 3 min à 4 min 🤓.</StyledListItem>
        <StyledListItem>Munissez-vous de votre n° RNA.</StyledListItem>
      </StyledList>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          label="Nom de l'association"
          placeholder="Entrez le nom de votre association"
          name="associationName"
          value={formValues.associationName}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          label="RNA de l’association"
          placeholder="Entrez votre RNA"
          name="rna"
          value={formValues.rna}
          onChange={handleChange}
          required
        />
        <StyledSelect
          value={formValues.categories}
          options={options}
          placeholder="Sélectionnez une catégorie"
          isMulti
          required
          onChange={handleChange}
          label="Catégories"
        />
        <StyledTextArea
          label="Description"
          placeholder="Description de votre association"
          name="description"
          value={formValues.description}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          label="Nom"
          placeholder="Entrez votre nom"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          label="Prénom"
          placeholder="Entrez votre prénom"
          name="firstname"
          value={formValues.firstname}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="email"
          label="Email"
          placeholder="Entrez votre adresse mail"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="password"
          label="Mot de passe"
          placeholder="Entrez votre mot de passe"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="password"
          label="Retapez votre mot de passe"
          placeholder="Saisissez à nouveau votre mot de passe"
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleChange}
          required
        />
        <StyledText>* Champs obligatoires</StyledText>
        <StyledButton label="M'inscrire" />
      </StyledForm>
    </StyledInscriptionContainer>
  );
};
export default AssociationRegistration;
