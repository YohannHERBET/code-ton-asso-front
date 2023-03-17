import PropTypes from 'prop-types';
import { StyledCheckbox } from './Checkbox.styled';

const Checkbox = ({ className, checked, onChange }) => (
  <StyledCheckbox
    className={className}
    type="checkbox"
    checked={checked}
    onChange={onChange}
  />
);

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
