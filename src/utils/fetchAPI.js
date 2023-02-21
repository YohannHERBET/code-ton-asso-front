import axios from 'axios';

export const createUserAndAssociation = async (formValues) => {
  try {
    const associationResponse = await axios.post(
      `${process.env.REACT_APP_API_URL}associations`,
      {
        rna: formValues.rna,
        association_name: formValues.associationName,
        slug: formValues.name,
      }
    );
    const userResponse = await axios.post(
      `${process.env.REACT_APP_API_URL}users`,
      {
        firstname: formValues.firstname,
        lastname: formValues.name,
        email: formValues.email,
        description: formValues.description,
        developer_id: null,
        association_id: associationResponse.data.id,
      }
    );
    console.log(
      "Réponse de l'API pour création de l'utilisateur :",
      userResponse.data,
      "Réponse de l'API pour création de l'asso :",
      associationResponse
    );
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
  }
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

export const getCategories = async () => {
  const categories = await axios.get(
    `${process.env.REACT_APP_API_URL}categories`
  );
  return categories.data;
};

export const getProjectTypes = async () => {
  const types = await axios.get(`${process.env.REACT_APP_API_URL}types`);
  return types.data;
};

export const getProjectFeatures = async () => {
  const features = await axios.get(`${process.env.REACT_APP_API_URL}features`);
  return features.data;
};
