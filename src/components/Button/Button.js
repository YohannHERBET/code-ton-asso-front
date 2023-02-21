import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
    to,
    variant = buttonEnum.fill,
  } = props;

  const StyledButton = getRightButton(variant);
  const button = to ? (
    <Link to={to}>
      <StyledButton className={className} $color={color} onClick={onClick}>
        {startIcon}
        {label}
        {endIcon}
      </StyledButton>
    </Link>
  ) : (
    <StyledButton className={className} $color={color} onClick={onClick}>
      {startIcon}
      {label}
      {endIcon}
    </StyledButton>
  );

  return button;
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
