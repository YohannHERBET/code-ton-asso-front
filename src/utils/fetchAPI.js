import axios from 'axios';

export const createUserAndDeveloper = async (formValues) => {
  await axios.post(`${process.env.REACT_APP_API_URL}auth/create-dev`, {
    firstname: formValues.firstname,
    lastname: formValues.name,
    email: formValues.email,
    password: formValues.password,
    description: formValues.description,
    slug: formValues.name,
    type: formValues.type.value,
    level: formValues.level.value,
    work_preferences: formValues.workPreferences.value,
  });
};

export const createUserAndAssociation = async (formValues) => {
  await axios.post(`${process.env.REACT_APP_API_URL}auth/create-asso`, {
    firstname: formValues.firstname,
    lastname: formValues.name,
    email: formValues.email,
    password: formValues.password,
    description: formValues.description,
    rna: formValues.rna,
    association_name: formValues.associationName,
    slug: formValues.name,
  });
};

export const getCategories = async () => {
  const categories = await axios.get(
    `${process.env.REACT_APP_API_URL}categories`
  );
  return categories.data;
};

export const getSkills = async () => {
  const skills = await axios.get(`${process.env.REACT_APP_API_URL}skills`);
  return skills.data;
};

export const checkRNA = async (rnaNumber) => {
  await axios.get(`https://entreprise.data.gouv.fr/api/rna/v1/id/${rnaNumber}`);
};

export const getAuth = async (formValues) => {
  const auth = await axios.post(`${process.env.REACT_APP_API_URL}auth/login`, {
    email: formValues?.email,
    password: formValues?.password,
  });
  return auth.data;
};

export const getUser = async (userId) => {
  const user = await axios.get(`${process.env.REACT_APP_API_URL}users`, {
    params: {
      id: userId,
    },
  });
  return user.data;
};

export const getProjectTypes = async () => {
  const types = await axios.get(`${process.env.REACT_APP_API_URL}types`);
  return types.data;
};

export const getProject = async (slug) => {
  const project = await axios.get(
    `${process.env.REACT_APP_API_URL}projects/${slug}`
  );
  return project.data;
};

export const getProjectFeatures = async () => {
  const features = await axios.get(`${process.env.REACT_APP_API_URL}features`);
  return features.data;
};

export const joinProject = async ({ developerId, projectId, token }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}projects/join`,
    {
      developerId,
      projectId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const quitProject = async ({ developerId, projectId, token }) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API_URL}projects/quit`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { developerId, projectId },
    }
  );
  return response.data;
};

export const updateProject = async ({ projectId, payload, token }) => {
  const response = await axios.put(
    `${process.env.REACT_APP_API_URL}projects/${projectId}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
