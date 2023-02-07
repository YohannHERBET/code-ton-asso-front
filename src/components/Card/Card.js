import PropTypes from 'prop-types';

import {
  StyledArrow,
  StyledBackground,
  StyledCard,
  StyledImage,
  StyledLink,
  StyledText,
  StyledTextContainer,
  StyledTitle,
} from './Card.styled';

import titleEnum from '../../global/enums/titleEnum';
import cardTypeMatcher from '../../global/enums/cardTypeMatcher';
import cardTypeEnum from '../../global/enums/cardTypeEnum';

const Card = (props) => {
  const {
    title,
    description,
    slug,
    imageUrl,
    type = cardTypeEnum.project,
  } = props;

  const StyledIcon = cardTypeMatcher[type];

  return (
    <StyledCard>
      <StyledLink to={slug}>
        {imageUrl ? (
          <StyledImage src={imageUrl} />
        ) : (
          <StyledBackground>
            <StyledIcon />
          </StyledBackground>
        )}
        <StyledTextContainer>
          <StyledTitle content={title} variant={titleEnum.h3} />
          <StyledText>{description}</StyledText>
          <StyledArrow />
        </StyledTextContainer>
      </StyledLink>
    </StyledCard>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string,
  slug: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default Card;
