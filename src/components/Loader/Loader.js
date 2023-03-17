import PropTypes from 'prop-types';

import { BeatLoader } from 'react-spinners';
import { StyledLoader } from './Loader.styled';
import theme from '../../global/theme';

const Loader = ({ loading, className }) =>
  loading ? (
    <StyledLoader className={className}>
      <BeatLoader color={theme.color.primary} loading={loading} />
    </StyledLoader>
  ) : null;

Loader.propTypes = { loading: PropTypes.bool, className: PropTypes.string };

export default Loader;
