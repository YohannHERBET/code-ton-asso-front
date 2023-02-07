import PropTypes from 'prop-types';

import titleMatcher from '../../global/enums/titleMatcher';
import titleEnum from '../../global/enums/titleEnum';

const Title = (props) => {
  const { className, content, variant = titleEnum.h1 } = props;

  const Element = titleMatcher[variant];

  return <Element className={className}>{content}</Element>;
};

Title.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
};

export default Title;
