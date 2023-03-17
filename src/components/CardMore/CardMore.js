import PropTypes from 'prop-types';
import titleEnum from '../../global/enums/titleEnum';

import { StyledCardMore, StyledLink, StyledTitle } from './CardMore.styled';
import { ReactComponent as Arrow } from '../../assets/arrow-right.svg';

const CardMore = (props) => {
  const { className, title, slug } = props;
  return (
    <StyledCardMore className={className}>
      <StyledLink to={slug}>
        <StyledTitle content={title} variant={titleEnum.h3} />
        <Arrow />
      </StyledLink>
    </StyledCardMore>
  );
};

CardMore.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default CardMore;
