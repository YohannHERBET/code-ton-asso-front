import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import UserContextProvider from '../../context/userContext';

import theme from '../../global/theme';
import Layout from '../Layout/Layout';
import Router from '../../utils/router';
import GlobalStyle from '../../global/globalStyles';

const App = () => (
  <ThemeProvider theme={theme}>
    <UserContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </UserContextProvider>
  </ThemeProvider>
);

export default App;
