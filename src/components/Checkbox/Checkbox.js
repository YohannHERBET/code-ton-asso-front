import PropTypes from 'prop-types';
import { StyledCheckbox } from './Checkbox.styled';

const Checkbox = ({ checked }) => (
  <StyledCheckbox type="checkbox" checked={checked} />
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default Checkbox;
