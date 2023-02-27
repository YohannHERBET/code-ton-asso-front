import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { getProject } from '../../utils/fetchAPI';

import cardTypeEnum from '../../global/enums/cardTypeEnum';
import cardTypeMatcher from '../../global/enums/cardTypeMatcher';
import {
  StyledBackground,
  StyledBlock,
  StyledDescription,
  StyledFeature,
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
  const { slug } = useParams();

  async function getProjectDetails() {
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
    const { firstname, lastname } = currentProject.association.user;
    const { label: projectType } = currentProject.type;

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
    });
  }

  useEffect(() => {
    getProjectDetails();
  }, []);

  const StyledIcon = cardTypeMatcher[type];

  const featuresList = project.features?.map((feature) => (
    <StyledFeature key={feature.id}>{feature.label}</StyledFeature>
  ));

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
          <StyledSubTitle
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
              {featuresList}
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
    </StyledProject>
  );
};

Project.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Project;
