import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { getProject } from '../../utils/fetchAPI';

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

  const contactAssociation = () => {
    window.location.href = `mailto:${project.email}`;
  };

  const getProjectDetails = async () => {
    const currentProject = await getProject(slug);
    const {
      title,
      description,
      Features,
      Developers,
      other_features: otherFeatures,
      release_date: releaseDate,
    } = currentProject;
    const { association_name: associationName } = currentProject.association;
    const { firstname, lastname, email } = currentProject.association.user;
    const { label: projectType } = currentProject.type;

    // TODO:
    setIsMyProject(false);

    setProject({
      name: `${firstname} ${lastname}`,
      associationName: associationName,
      title: title,
      description,
      type: projectType,
      features: Features || null,
      developers: Developers || null,
      otherFeatures,
      releaseDate,
      email,
    });
  };

  useEffect(() => {
    getProjectDetails();
  }, []);

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
      <StyledButtons>
        {isMyProject ? (
          <Button label="Masquer mon projet" />
        ) : (
          <>
            <Button label="Participer au projet" />
            <Button
              label="Contacter l'association"
              variant={buttonEnum.outline}
              onClick={contactAssociation}
            />
          </>
        )}
      </StyledButtons>
    </StyledProject>
  );
};

Project.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Project;
