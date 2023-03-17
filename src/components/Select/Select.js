import PropTypes from 'prop-types';
import { components } from 'react-select';
import { useState } from 'react';
import theme from '../../global/theme';
import Checkbox from '../Checkbox/Checkbox';

import {
  StyledSelect,
  StyledContainerSelect,
  StyledError,
  StyledRequired,
  StyledLabel,
} from './Select.styled';

const InputOption = ({
  getStyles,
  Icon,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  isMulti,
  onChange,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  let bg = 'transparent';
  if (isFocused) bg = theme.color.grey10;
  if (isActive) bg = `${theme.color.secondaryLight}40`;
  if (isSelected) bg = `${theme.color.secondaryLight}40`;

  const style = {
    alignItems: 'center',
    backgroundColor: bg,
    margin: '3px 0',
    color: 'inherit',
    display: 'flex',
  };

  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style,
  };

  return (
    <components.Option
      {...rest}
      onChange={onChange}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      {isMulti && (
        <Checkbox
          checked={isSelected}
          onChange={() => onChange({ target: { value: !isSelected } })}
        />
      )}
      {children}
    </components.Option>
  );
};

InputOption.propTypes = {
  getStyles: PropTypes.func,
  isMulti: PropTypes.bool,
  Icon: PropTypes.node,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
  children: PropTypes.node,
  innerProps: PropTypes.object,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onChange: PropTypes.func,
};

const Select = ({
  onChange,
  className,
  error,
  label,
  name,
  placeholder,
  isMulti = false,
  required,
  options,
  value = '',
}) => (
  <StyledContainerSelect className={className}>
    <StyledLabel htmlFor={name}>
      {label}
      {required && <StyledRequired>*</StyledRequired>}
    </StyledLabel>
    <StyledSelect
      closeMenuOnSelect={!isMulti}
      hideSelectedOptions={false}
      isSearchable={false}
      value={value}
      onChange={(event) => onChange(event, name)}
      error={error}
      isMulti={isMulti}
      name={name}
      classNamePrefix="select"
      placeholder={placeholder}
      required={required}
      options={options}
      components={{
        Option: InputOption,
      }}
    />
    <StyledError>{error}</StyledError>
  </StyledContainerSelect>
);
Select.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  isMulti: PropTypes.bool,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
};
export default Select;
