import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../../global/theme';
import Layout from '../Layout/Layout';
import Router from '../../utils/router';
import GlobalStyle from '../../global/globalStyles';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
