import axios from 'axios';

export const createUserAndDeveloper = async (formValues) => {
  await axios.post(`${process.env.REACT_APP_API_URL}auth/create-dev`, {
    firstname: formValues.firstname,
    lastname: formValues.name,
    email: formValues.email,
    password: formValues.password,
    description: formValues.description,
    slug: `${formValues.firstname.replace(/\s/g, '-').toLowerCase()}-${formValues.name.replace(/\s/g, '-').toLowerCase()}`,
    type: formValues.type.value,
    level: formValues.level.value,
    skills: formValues.skills.map((skill) => skill.id),
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
    categories: formValues.categories.map((category) => category.id),
    rna: formValues.rna,
    association_name: formValues.associationName,
    slug: formValues.associationName.replace(/\s/g, '-').toLowerCase(),
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

export const createProject = async (data, associationId) => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}projects`, {
    release_date: data.date,
    description: data.description,
    other_features: data.otherFeatures,
    title: data.title,
    type_id: data.type.id,
    features: data.features.map((feature) => feature.id),
    association_id: associationId,
    slug: data.title.replace(/\s/g, '-').toLowerCase(),
  }, {
    headers: {
      Authorization: `Bearer ${document.cookie.split('=')[1]}`,
    }
  });
  return response.data;
};

export const getAssociation = async (slug) => {
  const association = await axios.get(
    `${process.env.REACT_APP_API_URL}associations/${slug}`
  );
  return association.data;
};

export const getDeveloper = async (slug) => {
  const developer = await axios.get(
    `${process.env.REACT_APP_API_URL}developers/${slug}`
  );
  return developer.data;
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
