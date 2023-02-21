import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { getProject } from '../../utils/fetchAPI';

import cardTypeEnum from '../../global/enums/cardTypeEnum';
import cardTypeMatcher from '../../global/enums/cardTypeMatcher';
import {
  StyledBackground,
  StyledDescription,
  StyledImage,
  StyledInfos,
  StyledName,
  StyledProject,
  StyledSubTitle,
  StyledTitle,
} from './Project.styled';
import titleEnum from '../../global/enums/titleEnum';

const Project = (props) => {
  const { type = cardTypeEnum.project } = props;
  const [project, setProject] = useState({
    name: '',
    associationName: '',
    title: '',
    description: '',
  });
  const { slug } = useParams();

  async function getProjectDetails() {
    const currentProject = await getProject(slug);
    const { title, description } = currentProject;
    const { association_name: associationName } = currentProject.association;
    const { firstname, lastname } = currentProject.association.user;
    const { label: projectType } = currentProject.type;

    setProject({
      name: `${firstname} ${lastname}`,
      associationName: associationName,
      title: title,
      description,
      type: projectType,
    });
  }

  useEffect(() => {
    getProjectDetails();
  }, []);

  const StyledIcon = cardTypeMatcher[type];

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
        <StyledName>{project.name}</StyledName>
        <StyledTitle content={project.title} variant={titleEnum.h1} />
        <StyledSubTitle
          content={`${project.associationName} - ${project.type}`}
          variant={titleEnum.h2}
        />
        <StyledDescription>{project.description}</StyledDescription>
      </StyledInfos>
    </StyledProject>
  );
};

Project.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Project;
