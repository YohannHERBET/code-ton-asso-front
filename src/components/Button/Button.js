import PropTypes from 'prop-types';

import {
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledTertiaryButton,
} from './Button.styled';

import buttonEnum from '../../global/enums/buttonEnum';
import buttonColorEnum from '../../global/enums/buttonColorEnum';

const getRightButton = (variant) => {
  if (variant === buttonEnum.fill) {
    return StyledPrimaryButton;
  }
  if (variant === buttonEnum.outline) {
    return StyledSecondaryButton;
  }
  return StyledTertiaryButton;
};

const Button = (props) => {
  const {
    className,
    color = buttonColorEnum.primary,
    startIcon,
    endIcon,
    label,
    onClick,
    variant = buttonEnum.fill,
  } = props;

  const StyledButton = getRightButton(variant);

  return (
    <StyledButton className={className} $color={color} onClick={onClick}>
      {startIcon}
      {label}
      {endIcon}
    </StyledButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};

export default Button;
