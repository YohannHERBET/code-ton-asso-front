import React from 'react';
import PropTypes from 'prop-types';

import titleMatcher from '../../global/enums/titleMatcher';

const Title = ({ className, content, variant }) => {
  const Element = titleMatcher[variant];
  return <Element className={className}>{content}</Element>;
};

Title.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
};

export default Title;
