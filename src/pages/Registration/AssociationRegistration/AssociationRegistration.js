import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import titleEnum from '../../../global/enums/titleEnum';
import {
  createUserAndAssociation,
  getCategories,
  checkRNA,
} from '../../../utils/fetchAPI';

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
  StyledError,
} from './AssociationRegistration.styled';

const AssociationRegistration = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
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

  const checkPassword = () => {
    if (formValues.password !== formValues.confirmPassword) {
      return true;
    }
    return false;
  };

  async function fetchCategories() {
    try {
      const categoriesFromBackend = await getCategories();
      setCategories(categoriesFromBackend);
    } catch (error) {
      console.error("Une erreur s'est produite:", error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (event) => {
    if (!event.target) {
      return setFormValues({ ...formValues, categories: event });
    }
    const { name, value } = event.target;
    return setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const asError = checkPassword();
      if (!asError) {
        setErrorMessage('');
        await checkRNA(formValues.rna);
        await createUserAndAssociation(formValues);
        navigate('/connexion');
      } else {
        setErrorMessage('Les mots de passe ne correspondent pas');
      }
    } catch (error) {
      if (error.response?.status === 400) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage('Le numéro RNA est invalide');
      }
    }
  };

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
          options={categories}
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
        {errorMessage && <StyledError>{errorMessage}</StyledError>}
        <StyledText>* Champs obligatoires</StyledText>
        <StyledButton label="M'inscrire" />
      </StyledForm>
    </StyledInscriptionContainer>
  );
};
export default AssociationRegistration;
