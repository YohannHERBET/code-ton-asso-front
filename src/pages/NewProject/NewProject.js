import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledNewProject,
  StyledTitle,
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledError,
  StyledTextArea,
  StyledButton,
} from './NewProject.styled';

import titleEnum from '../../global/enums/titleEnum';
import inputTypeEnum from '../../global/enums/inputTypeEnum';
import buttonColorEnum from '../../global/enums/buttonColorEnum';
import { getProjectFeatures, getProjectTypes, createProject } from '../../utils/fetchAPI';

const FieldEnum = {
  date: 'date',
  description: 'description',
  features: 'features',
  otherFeatures: 'otherFeatures',
  title: 'title',
  type: 'type',
};

const NewProject = (authUser) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [features, setFeatures] = useState([]);
  const [types, setTypes] = useState([]);
  const [data, setData] = useState({
    [FieldEnum.date]: '',
    [FieldEnum.description]: '',
    [FieldEnum.features]: [],
    [FieldEnum.otherFeatures]: '',
    [FieldEnum.title]: '',
    [FieldEnum.type]: '',
  });

  const handleChangeData = (event, type) => {
    if (!event.target) {
      return setData({ ...data, [type]: event });
    }
    const { name, value } = event.target;
    return setData({ ...data, [name]: value });
  };

  const fetchData = async () => {
    try {
      const featuresList = await getProjectFeatures();
      const typesList = await getProjectTypes();

      setFeatures(featuresList);
      setTypes(typesList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await createProject(data, authUser.props.associationId);
      const { slug } = response.project;
      navigate(`/projets/${slug}`);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <StyledNewProject>
      <StyledTitle content="Nouveau projet" variant={titleEnum.h1} />
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          onChange={handleChangeData}
          value={data[FieldEnum.title]}
          name={FieldEnum.title}
          label="Titre de votre projet"
          type={inputTypeEnum.text}
          placeholder="Entrez le titre de votre projet"
          required
        />
        <StyledSelect
          onChange={handleChangeData}
          value={data[FieldEnum.type]}
          name={FieldEnum.type}
          label="Type de projet"
          placeholder="Selectionnez le type de votre projet"
          options={types}
          required
        />
        <StyledTextArea
          onChange={handleChangeData}
          value={data[FieldEnum.description]}
          name={FieldEnum.description}
          label="Description du projet"
          placeholder="Entrez la description de votre projet"
          required
        />
        <StyledSelect
          onChange={handleChangeData}
          value={data[FieldEnum.features]}
          name={FieldEnum.features}
          label="Fonctionnalités voulues"
          placeholder="Selectionnez les fonctionnalités de votre projet"
          options={features}
          isMulti
          required
        />
        <StyledTextArea
          onChange={handleChangeData}
          value={data[FieldEnum.otherFeatures]}
          name={FieldEnum.otherFeatures}
          label="Autres fonctionnalités attendues"
          placeholder="Entrez les autres fonctionnalités attendues"
        />
        <StyledInput
          onChange={handleChangeData}
          value={data[FieldEnum.date]}
          name={FieldEnum.date}
          label="Date de mise en ligne souhaitée"
          type={inputTypeEnum.date}
        />
        {errorMessage && <StyledError>{errorMessage}</StyledError>}
        <StyledButton
          color={buttonColorEnum.primary}
          label="Créer mon projet"
        />
      </StyledForm>
    </StyledNewProject>
  );
};

export default NewProject;
