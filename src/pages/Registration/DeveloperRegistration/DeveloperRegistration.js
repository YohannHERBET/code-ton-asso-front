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
  StyledArrowBack,
  StyledContainerTitle,
} from './DeveloperRegistration.styled';

const DeveloperRegistration = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isPageTwo, setIsPageTwo] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    firstname: '',
    email: '',
    password: '',
    confirmPassword: '',
    type: '',
    level: '',
    workPreferences: '',
    skills: [],
    description: '',
  });

  // appel api skills
  // envoyer les data

  const handleChange = (event, type) => {
    if (!event.target) {
      return setFormValues({ ...formValues, [type]: event });
    }
    const { name, value } = event.target;
    return setFormValues({ ...formValues, [name]: value });
  };

  const checkPassword = () => {
    if (formValues.password !== formValues.confirmPassword) {
      return true;
    }
    return false;
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
    { value: 'Frontend', label: 'Frontend' },
    { value: 'Backend', label: 'Backend' },
    { value: 'Fullstack', label: 'Fullstack' },
  ];
  const workPreferences = [
    { value: 'Solo', label: 'en solo' },
    { value: 'Group', label: 'en groupe' },
    { value: 'Both', label: 'Les deux me vont' },
  ];
  const level = [
    { value: 'Junior', label: 'junior' },
    { value: 'Intermediate', label: 'expérimenté' },
    { value: 'Senior', label: 'senior' },
  ];

  return (
    <StyledInscriptionContainer>
      <StyledContainerTitle>
        {isPageTwo && <StyledArrowBack onClick={() => setIsPageTwo(false)} />}
        <StyledTitle
          variant={titleEnum.h1}
          content={`Inscription ${!isPageTwo ? '1' : '2'}/2`}
        />
      </StyledContainerTitle>
      <StyledForm>
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
              name="skills"
              placeholder="Les technos et compétences que tu as"
              isMulti
              required
              onChange={handleChange}
              label="Tes compétences 🦾"
            />
            <StyledSelect
              value={formValues.type}
              options={type}
              name="type"
              placeholder="Frontend, Backend, Fullstack"
              required
              onChange={handleChange}
              label="Je suis développeur..."
            />
            <StyledSelect
              value={formValues.workPreferences}
              options={workPreferences}
              name="workPreferences"
              placeholder="Solo / Groupe / Les deux"
              require
              onChange={handleChange}
              label="Je préfère travailler"
            />
            <StyledSelect
              value={formValues.level}
              options={level}
              name="level"
              placeholder="Junior / Expérimenté / Senior"
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
        {errorMessage && <StyledError>{errorMessage}</StyledError>}
        <StyledText>* Champs obligatoires</StyledText>
        {!isPageTwo ? (
          <StyledButton
            type="button"
            label="Suivant"
            onClick={(e) => {
              e.preventDefault();
              const asError = checkPassword();
              if (!asError) {
                setErrorMessage('');
                setIsPageTwo(true);
              } else {
                setErrorMessage('Les mots de passe ne correspondent pas');
              }
            }}
          />
        ) : (
          <StyledButton label="M'inscrire" type="submit" />
        )}
      </StyledForm>
    </StyledInscriptionContainer>
  );
};
export default DeveloperRegistration;
