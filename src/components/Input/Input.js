/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import {
  StyledContainerInput,
  StyledError,
  StyledInput,
  StyledLabel,
  StyledRequired,
} from './Input.styled';

const Input = ({
  className,
  error,
  name,
  label,
  placeholder,
  type,
  required,
}) => (
  <StyledContainerInput>
    <StyledLabel htmlFor={name}>
      {label}
      {required && <StyledRequired>*</StyledRequired>}
    </StyledLabel>
    <StyledInput
      error={error}
      type={type}
      id={name}
      name={name}
      className={className}
      placeholder={placeholder}
      required={required}
    />
    <StyledError>{error}</StyledError>
  </StyledContainerInput>
);

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;
