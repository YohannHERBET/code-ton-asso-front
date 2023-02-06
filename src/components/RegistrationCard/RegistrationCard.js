import PropTypes from 'prop-types';
import {
  StyledContainerRegistrationCard,
  StyledArrowRegistrationCard,
  StyledtextRegistrationCard,
} from './RegistrationCard.styled';

const Title = (props) => {
  const { className, image, text, slug } = props;
  return (
    <StyledContainerRegistrationCard
      to={slug}
      className={className}
      image={image}
    >
      <StyledtextRegistrationCard>{text}</StyledtextRegistrationCard>
      <StyledArrowRegistrationCard />
    </StyledContainerRegistrationCard>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Title;
