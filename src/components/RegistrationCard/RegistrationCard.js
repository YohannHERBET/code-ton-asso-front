import PropTypes from 'prop-types';
import {
  StyledContainerRegistrationCard,
  StyledArrowRegistrationCard,
  StyledTitle,
} from './RegistrationCard.styled';
import titleEnum from '../../global/enums/titleEnum';

const RegistrationCard = (props) => {
  const { className, image, text, slug } = props;
  return (
    <StyledContainerRegistrationCard
      to={slug}
      className={className}
      image={image}
    >
      <StyledTitle variant={titleEnum.h2} content={text} />
      <StyledArrowRegistrationCard />
    </StyledContainerRegistrationCard>
  );
};

RegistrationCard.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default RegistrationCard;
