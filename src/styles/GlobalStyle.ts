import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #f0f2f5;
  }

  .container {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
  }
`;