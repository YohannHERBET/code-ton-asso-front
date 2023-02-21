import { useState } from 'react';
import titleEnum from '../../../global/enums/titleEnum';

import {
  StyledInscriptionContainer,
  StyledTitle,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledText,
  StyledTextArea,
  StyledSelect,
  StyledError,
} from './DeveloperRegistration.styled';

const DeveloperRegistration = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isPageTwo, setIsPageTwo] = useState(true);
  const [formValues, setFormValues] = useState({
    name: '',
    firstname: '',
    email: '',
    password: '',
    confirmPassword: '',
    type: {},
    level: {},
    workPreferences: {},
    skills: [],
    description: '',
  });

  // skills a remplacer par une valeur dynamique
  // flèche pour revenir en arrière quand t'es sur la page 2
  // dynamiser le bouton suivant pour qu'il devienne m'inscrire quand on est sur la page 2
  const handleChange = (event, type) => {
    if (!event.target && type === 'select') {
      return setFormValues({ ...formValues, skills: event });
    }
    const { name, value } = event.target;
    return setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (formValues.password !== formValues.confirmPassword) {
        setErrorMessage('Les mots de passe ne correpondent pas !');
      } else {
        console.log('on passe par la');
      }
    } catch (error) {
      console.log("Une erreur s'est produite:", error);
    }
  };

  const skills = [
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'Javascript', label: 'Javascript' },
    { value: 'React', label: 'React' },
    { value: 'Node', label: 'Node' },
    { value: 'PHP', label: 'PHP' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'C++', label: 'C++' },
    { value: 'C#', label: 'C#' },
    { value: 'C', label: 'C' },
    { value: 'Ruby', label: 'Ruby' },
  ];
  const type = [
    { value: 'Frontend', label: 'front' },
    { value: 'Backend', label: 'back' },
    { value: 'Fullstack', label: 'fullstack' },
  ];
  const workPreferences = [
    { value: 'Solo', label: 'en solo' },
    { value: 'Both', label: 'Les deux me vont' },
    { value: 'Group', label: 'en groupe' },
  ];
  const level = [
    { value: 'Junior', label: 'junior' },
    { value: 'Intermediate', label: 'expérimenté' },
    { value: 'Senior', label: 'senior' },
  ];

  return (
    <StyledInscriptionContainer>
      <StyledTitle
        variant={titleEnum.h1}
        content={`inscription ${!isPageTwo ? '1' : '2'}/2`}
      />
      <StyledForm onSubmit={handleSubmit}>
        {!isPageTwo && (
          <>
            <StyledInput
              type="text"
              label="C'est quoi ton nom ?"
              placeholder="Your name, Sir"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              required
            />
            <StyledInput
              type="text"
              label="C'est quoi ton prénom ?"
              placeholder="Entrez votre prénom"
              name="firstname"
              value={formValues.firstname}
              onChange={handleChange}
              required
            />
            <StyledInput
              type="email"
              label="Email (promis, pas de spam)"
              placeholder="Your email adress, Sir"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <StyledInput
              type="password"
              label="Mot de passe (azerty, 123456...)"
              placeholder="Entrez votre mot de passe"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
            <StyledInput
              type="password"
              label="Retape ton mot de passe"
              placeholder="Saisissez à nouveau votre mot de passe"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              required
            />
          </>
        )}
        {isPageTwo && (
          <>
            <StyledSelect
              value={formValues.skills}
              options={skills}
              placeholder="Sélectionnez une catégorie"
              isMulti
              required
              onChange={handleChange}
              label="Tes compétences 🦾"
            />
            <StyledSelect
              value={formValues.type}
              options={type}
              placeholder="Sélectionnez une catégorie"
              required
              onChange={handleChange}
              label="Je suis développeur..."
            />
            <StyledSelect
              value={formValues.workPreferences}
              options={workPreferences}
              placeholder="Sélectionnez une catégorie"
              required
              onChange={handleChange}
              label="Je préfère travailler"
            />
            <StyledSelect
              value={formValues.level}
              options={level}
              placeholder="Sélectionnez une catégorie"
              required
              onChange={handleChange}
              label="Je me considère (be honest!)"
            />
            <StyledTextArea
              label="Description"
              placeholder="Hello, je suis Francine. Je suis développeuse en reconversion et je souhaite participer à un projet à plusieurs (2 ou plus). J'aimerais bien contribuer à un projet qui ait du sens, idéalement dans la protection de l'environnement et des animaux.
              Au plaisir de vous connaître !"
              name="description"
              value={formValues.description}
              onChange={handleChange}
              required
            />
          </>
        )}
        <StyledError>{errorMessage}</StyledError>
        <StyledText>* Champs obligatoires</StyledText>
        {!isPageTwo ? (
          <StyledButton label="Suivant" onClick={() => setIsPageTwo(true)} />
        ) : (
          <StyledButton label="M'inscrire" type="submit" />
        )}
      </StyledForm>
    </StyledInscriptionContainer>
  );
};
export default DeveloperRegistration;
