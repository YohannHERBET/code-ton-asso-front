import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.fontFamily.text}, ${theme.fontFamily.title}, Sans-Serif;
  }
`;

export default GlobalStyle;
