/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import {
  StyledContainerTextArea,
  StyledError,
  StyledTextArea,
  StyledLabel,
  StyledRequired,
} from './TextArea.styled';

const TextArea = ({
  className,
  classNameTextArea,
  error,
  name,
  label,
  onChange,
  value,
  placeholder,
  required,
}) => (
  <StyledContainerTextArea className={className}>
    <StyledLabel htmlFor={name}>
      {label}
      {required && <StyledRequired>*</StyledRequired>}
    </StyledLabel>
    <StyledTextArea
      error={error}
      id={name}
      name={name}
      onChange={(e) => onChange(e, 'textarea')}
      value={value}
      className={classNameTextArea}
      placeholder={placeholder}
      required={required}
    />
    <StyledError>{error}</StyledError>
  </StyledContainerTextArea>
);

TextArea.propTypes = {
  className: PropTypes.string,
  classNameTextArea: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default TextArea;
