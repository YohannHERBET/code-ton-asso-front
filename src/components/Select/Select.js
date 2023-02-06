/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';

import {
  StyledSelect,
  StyledContainerSelect,
  StyledError,
} from './Select.styled';

const Select = ({
  onChange,
  className,
  error,
  name,
  placeholder,
  isMulti = false,
  required,
  options,
  value,
}) => (
  <StyledContainerSelect className={className}>
    <StyledSelect
      value={value}
      onChange={onChange}
      error={error}
      isMulti={isMulti}
      name={name}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder={placeholder}
      required={required}
      options={options}
    />
    <StyledError>{error}</StyledError>
  </StyledContainerSelect>
);

Select.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isMulti: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.object,
};

export default Select;
