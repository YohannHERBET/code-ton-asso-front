import PropTypes from 'prop-types';
import { StyledCheckbox } from './Checkbox.styled';

const Checkbox = ({ className, checked }) => (
  <StyledCheckbox className={className} type="checkbox" checked={checked} />
);

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
};

export default Checkbox;
