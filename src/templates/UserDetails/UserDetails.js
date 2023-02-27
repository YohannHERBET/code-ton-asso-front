import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { getAssociation } from '../../utils/fetchAPI';

import cardTypeEnum from '../../global/enums/cardTypeEnum';
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
  StyledTag,
} from './UserDetails.styled';
import titleEnum from '../../global/enums/titleEnum';

const UserDetails = (props) => {
  const { type = cardTypeEnum.project } = props;
  const [user, setUser] = useState({
    name: '',
    associationName: '',
    description: '',
    categories: [],
    projects: [],
    technos: [],
  });
  const { slug } = useParams();

  async function getUserDetails() {
    const currentUser = await getAssociation(slug);

    const { association_name: associationName, projects } = currentUser;
    const categories = currentUser.Categories;
    const { firstname, lastname, description } = currentUser.user;

    setUser({
      name: `${firstname} ${lastname}`,
      associationName: associationName,
      description: description,
      categories: categories || [],
      projects: projects,
      technos: [],
    });
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  const StyledIcon = cardTypeMatcher[type];

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
        <StyledName>{user.name}</StyledName>
        <StyledTitle content={user.associationName} variant={titleEnum.h1} />

        {user.categories.map((category) => {
          const { id, label } = category;
          return <StyledTag key={id} text={label} />;
        })}

        <StyledDescription>{user.description}</StyledDescription>

        <StyledSubTitle content="Projet(s) en cours" variant={titleEnum.h2} />
      </StyledInfos>
    </StyledUser>
  );
};

UserDetails.propTypes = {
  type: PropTypes.string.isRequired,
};

export default UserDetails;
