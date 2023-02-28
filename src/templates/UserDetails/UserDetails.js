import { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { getAssociation, getDeveloper } from '../../utils/fetchAPI';

import cardTypeMatcher from '../../global/enums/cardTypeMatcher';
import {
  StyledBackground,
  StyledDescription,
  StyledImage,
  StyledInfos,
  StyledName,
  StyledUser,
  StyledSubTitle,
  StyledTitle,
  StyledTagContainer,
  StyledCardList,
  StyledCard,
  StyledProjects,
  StyledTag,
  StyledButtons,
  StyledWorkPref,
} from './UserDetails.styled';
import titleEnum from '../../global/enums/titleEnum';
import Button from '../../components/Button/Button';
import { UserContext } from '../../context/userContext';

const UserDetails = (props) => {
  const { userType, cardType } = props;
  const { slug } = useParams();
  const { authUser } = useContext(UserContext);

  const [user, setUser] = useState({
    name: '',
    associationName: '',
    email: '',
    description: '',
    categories: [],
    projects: [],
    skills: [],
    specialisation: '',
    level: '',
    workPreferences: '',
  });

  async function getUserDetails() {
    const currentUser =
      userType === 'association'
        ? await getAssociation(slug)
        : await getDeveloper(slug);

    const {
      association_name: associationName,
      projects: assoProjects,
      type,
      level,
      work_preferences: workPreferences,
    } = currentUser;
    const categories = currentUser.Categories;
    const skills = currentUser.Skills;
    const devProjects = currentUser.Projects;
    const { firstname, lastname, description, email } = currentUser.user;

    setUser({
      name: `${firstname} ${lastname}`,
      email: email,
      associationName: associationName || '',
      description: description,
      categories: categories || [],
      projects: userType === 'association' ? assoProjects : devProjects,
      skills: skills || [],
      specialisation: type || '',
      level: level || '',
      workPreferences: workPreferences || '',
    });
  }

  const buttonContent =
    userType === 'association'
      ? 'Projet(s) en cours'
      : 'Participation aux projets';

  const noProjectContent =
    userType === 'association'
      ? 'Cette association n’a pas encore soumis de projet.'
      : "Ce développeur n'a pas encore participé à un projet";

  const categoriesList = user.categories?.map((category) => {
    const { id, label } = category;
    return <StyledTag key={id} text={label} />;
  });

  const devSpecialisation = (
    <>
      <StyledTag text={user.specialisation} />
      <StyledTag text={user.level} />
    </>
  );

  // const devWorkPref = user.workPreferences === 'Solo' && (
  // );

  // if (user.workPreferences === 'Both')
  // if (user.workPreferences === 'Group')

  const skillsList = user.skills?.map((skill) => {
    const { id, label } = skill;
    return <StyledTag key={id} text={label} secondary />;
  });

  const contactUser = () => {
    window.location.href = `mailto:${user.email}`;
  };

  // Compléter la logique de la fonction
  const deleteAccount = () => console.log('delete');

  useEffect(() => {
    getUserDetails();
  }, []);

  const StyledIcon = cardTypeMatcher[cardType];

  const projectsList = user.projects?.map((project) => {
    const { id, title, description } = project;
    return (
      <StyledCard
        key={id}
        title={title}
        description={description}
        slug={`/projets/${project.slug}`}
        type={cardType}
      />
    );
  });

  return (
    <StyledUser>
      {user.imageUrl ? (
        <StyledImage src={user.imageUrl} />
      ) : (
        <StyledBackground>
          <StyledIcon />
        </StyledBackground>
      )}
      <StyledInfos>
        {userType === 'association' ? (
          <>
            <StyledName>{user.name}</StyledName>
            <StyledTitle
              content={user.associationName}
              variant={titleEnum.h1}
            />
          </>
        ) : (
          <StyledTitle content={user.name} variant={titleEnum.h1} />
        )}

        <StyledTagContainer>
          {userType === 'association' ? categoriesList : devSpecialisation}
        </StyledTagContainer>

        {/* Si je suis co (dev/asso), je veux voir le 2e bouton */}
        {/* Ajuster la couleur */}
        {/* Ajuster le onClick */}
        <StyledButtons>
          <Button label="Contactez-moi" onClick={contactUser} />
        </StyledButtons>

        <StyledButtons>
          <Button label="Supprimer mon compte" onClick={deleteAccount} />
        </StyledButtons>

        <StyledDescription>{user.description}</StyledDescription>

        {userType === 'developer' && (
          <>
            <StyledSubTitle
              content="Les technos que je maîtrise :"
              variant={titleEnum.h2}
            />
            <StyledTagContainer>{skillsList}</StyledTagContainer>

            <StyledWorkPref>
              <StyledSubTitle
                content="Préfère travailler :"
                variant={titleEnum.h2}
              />
              {user.workPreferences}
            </StyledWorkPref>
          </>
        )}
      </StyledInfos>

      <StyledProjects hasProjects={projectsList?.length}>
        <StyledSubTitle content={buttonContent} variant={titleEnum.h2} />

        {projectsList?.length ? (
          <StyledCardList>{projectsList}</StyledCardList>
        ) : (
          <StyledDescription>{noProjectContent}</StyledDescription>
        )}
      </StyledProjects>
    </StyledUser>
  );
};

UserDetails.propTypes = {
  userType: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
};

export default UserDetails;
