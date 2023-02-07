import PropTypes from 'prop-types';
import { StyledTag } from './Tag.styled';

const Tag = (props) => {
 const { className, text, secondary = false } = props;
 return (<StyledTag secondary={secondary} className={className}>{text}</StyledTag>);
};
Tag.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
};

export default Tag;
