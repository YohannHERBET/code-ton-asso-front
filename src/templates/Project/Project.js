import { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

import {
  getProject,
  joinProject,
  quitProject,
  updateProject,
} from '../../utils/fetchAPI';

import cardTypeEnum from '../../global/enums/cardTypeEnum';
import cardTypeMatcher from '../../global/enums/cardTypeMatcher';
import {
  StyledAssociationName,
  StyledBackground,
  StyledBlock,
  StyledButtons,
  StyledCard,
  StyledCardList,
  StyledDescription,
  StyledDevelopers,
  StyledFeature,
  StyledFeaturesList,
  StyledImage,
  StyledInfos,
  StyledLeftContainer,
  StyledName,
  StyledProject,
  StyledRightContainer,
  StyledSubTitle,
  StyledTitle,
} from './Project.styled';
import titleEnum from '../../global/enums/titleEnum';
import { getFormatedDate } from '../../utils/formatDate';
import Button from '../../components/Button/Button';
import buttonEnum from '../../global/enums/buttonEnum';
import { getUserType } from '../../utils/getUserType';
import { UserContext } from '../../context/userContext';
import { userTypeEnum } from '../../global/enums/userTypeEnum';
import buttonColorEnum from '../../global/enums/buttonColorEnum';

const Project = (props) => {
  const { type = cardTypeEnum.project } = props;
  const [project, setProject] = useState({
    name: '',
    associationName: '',
    title: '',
    description: '',
    features: null,
    developers: null,
    otherFeatures: '',
    releaseDate: '',
  });
  const [isMyProject, setIsMyProject] = useState(false);
  const { slug } = useParams();

  const { authUser } = useContext(UserContext);
  const userType = getUserType(authUser);

  const contactAssociation = () => {
    window.location.href = `mailto:${project.email}`;
  };

  useEffect(() => {
    if (
      userType === userTypeEnum.association &&
      authUser?.id === project.userAssociationId
    ) {
      setIsMyProject(true);
    } else if (
      userType === userTypeEnum.developer &&
      project.developers?.find(
        (developer) => developer?.user.id === authUser?.id
      )
    ) {
      setIsMyProject(true);
    } else {
      setIsMyProject(false);
    }
  }, [project]);

  const getProjectDetails = async () => {
    const currentProject = await getProject(slug);
    const {
      id: projectId,
      title,
      description,
      Features,
      Developers,
      other_features: otherFeatures,
      release_date: releaseDate,
      visible,
    } = currentProject;
    const { association_name: associationName } = currentProject.association;
    const {
      firstname,
      lastname,
      email,
      id: userAssociationId,
    } = currentProject.association.user;
    const { label: projectType } = currentProject.type;

    setProject({
      id: projectId,
      name: `${firstname} ${lastname}`,
      associationName: associationName,
      userAssociationId,
      title: title,
      description,
      type: projectType,
      features: Features || null,
      developers: Developers || null,
      otherFeatures,
      releaseDate,
      email,
      visible,
    });
  };

  useEffect(() => {
    getProjectDetails();
  }, []);

  const toggleVisibleProject = async () => {
    const token = Cookies.get('token');
    try {
      const payload = {
        visible: !project.visible,
      };
      await updateProject({
        projectId: project.id,
        payload,
        token,
      });
      await getProjectDetails();
    } catch (error) {
      console.error(error);
    }
  };

  const handleJoinProject = async () => {
    try {
      const token = Cookies.get('token');
      await joinProject({
        developerId: authUser?.developerId,
        projectId: project.id,
        token,
      });
      await getProjectDetails(slug);
    } catch (error) {
      console.error(error);
    }
  };

  const handleQuitProject = async () => {
    try {
      const token = Cookies.get('token');
      await quitProject({
        developerId: authUser?.developerId,
        projectId: project.id,
        token,
      });
      await getProjectDetails(slug);
    } catch (error) {
      console.error(error);
    }
  };

  const getButtons = () => {
    if (userType === userTypeEnum.association) {
      if (isMyProject) {
        return project.visible ? (
          <Button label="Masquer mon projet" onClick={toggleVisibleProject} />
        ) : (
          <Button
            label="Rendre visible mon projet"
            onClick={toggleVisibleProject}
          />
        );
      }
      return null;
    }
    if (userType === userTypeEnum.developer) {
      return (
        <>
          {isMyProject ? (
            <Button
              label="Annuler ma participation"
              color={buttonColorEnum.tertiary}
              onClick={handleQuitProject}
            />
          ) : (
            <Button label="Participer au projet" onClick={handleJoinProject} />
          )}
          <Button
            label="Contacter l'association"
            variant={buttonEnum.outline}
            onClick={contactAssociation}
          />
        </>
      );
    }
    return null;
  };

  const StyledIcon = cardTypeMatcher[type];

  const featuresList = project.features?.map((feature) => (
    <li key={feature.id}>
      <StyledFeature>{feature.label}</StyledFeature>
    </li>
  ));

  const developersList = project.developers?.map((developer) => {
    const { firstname, lastname, description } = developer.user;
    return (
      <StyledCard
        key={developer.id}
        title={`${firstname} ${lastname}`}
        description={description}
        slug={`/developpeurs/${developer.slug}`}
        type={cardTypeEnum.developer}
      />
    );
  });

  const buttons = getButtons();

  return (
    <StyledProject>
      {project.imageUrl ? (
        <StyledImage src={project.imageUrl} />
      ) : (
        <StyledBackground>
          <StyledIcon />
        </StyledBackground>
      )}
      <StyledInfos>
        <StyledLeftContainer>
          <StyledName>{project.name}</StyledName>
          <StyledTitle content={project.title} variant={titleEnum.h1} />
          <StyledAssociationName
            content={`${project.associationName} - ${project.type}`}
            variant={titleEnum.h2}
          />
          <StyledDescription>{project.description}</StyledDescription>
        </StyledLeftContainer>
        <StyledRightContainer>
          {featuresList && (
            <StyledBlock>
              <StyledSubTitle
                content="Fonctionnalités voulues"
                variant={titleEnum.h2}
              />
              <StyledFeaturesList>{featuresList}</StyledFeaturesList>
            </StyledBlock>
          )}
          {project.otherFeatures && (
            <StyledBlock>
              <StyledSubTitle
                content="Autres Fonctionnalités"
                variant={titleEnum.h2}
              />
              <StyledDescription>{project.otherFeatures}</StyledDescription>
            </StyledBlock>
          )}
          {project.releaseDate && (
            <StyledBlock>
              <StyledSubTitle
                content="Date de mise en ligne souhaitée"
                variant={titleEnum.h2}
              />
              {getFormatedDate(project.releaseDate)}
            </StyledBlock>
          )}
        </StyledRightContainer>
      </StyledInfos>
      <StyledDevelopers hasDevelopers={developersList?.length}>
        <StyledSubTitle content="Les participants" variant={titleEnum.h2} />
        {developersList?.length ? (
          <StyledCardList>{developersList}</StyledCardList>
        ) : (
          <StyledDescription>
            Pas encore de participants pour ce projet, lance-toi!
          </StyledDescription>
        )}
      </StyledDevelopers>
      {buttons && <StyledButtons>{buttons}</StyledButtons>}
    </StyledProject>
  );
};

Project.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Project;
