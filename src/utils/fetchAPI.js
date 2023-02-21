import axios from 'axios';

export const createUserAndDeveloper = async (formValues) => {
  try {
    const userResponse = await axios
      .post(`${process.env.REACT_APP_API_URL}auth/create-dev`, {
        firstname: formValues.firstname,
        lastname: formValues.name,
        email: formValues.email,
        password: formValues.password,
        description: formValues.description,
        slug: formValues.name,
        type: formValues.type.value,
        level: formValues.level.value,
        work_preferences: formValues.workPreferences.value,
      })
      .then((response) => console.log(response));

    console.log(
      "Réponse de l'API pour création de l'utilisateur développeur :",
      userResponse.data
    );
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
  }
};

export const createUserAndAssociation = async (formValues) => {
  try {
    console.log('on passe par la bordel');
    const userResponse = await axios
      .post(`${process.env.REACT_APP_API_URL}auth/create-asso`, {
        firstname: formValues.firstname,
        lastname: formValues.name,
        email: formValues.email,
        password: formValues.password,
        description: formValues.description,
        rna: formValues.rna,
        association_name: formValues.associationName,
        slug: formValues.name,
      })
      .then((response) => console.log(response));

    console.log(
      "Réponse de l'API pour création de l'asso :",
      userResponse.data
    );
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
  }
};

export const getCategories = async () => {
  const categories = await axios.get(
    `${process.env.REACT_APP_API_URL}categories`
  );
  return categories.data;
};

export const getSkills = async () => {
  const skills = await axios.get(
    `${process.env.REACT_APP_API_URL}skills`
  );
  return skills.data;
};

export const checkRNA = async (rnaNumber) => {
  try {
    const rna = await axios.get(
      `https://entreprise.data.gouv.fr/api/rna/v1/id/${rnaNumber}`
    );
    return rna.data;
  } catch (error) {
    return error;
  }
};
