import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { StyledLayout } from './Layout.styled';

const Layout = ({ children }) => (
  <StyledLayout>
    <Header />
    {children}
    <Footer />
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
