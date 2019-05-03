import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;

    user-select: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
  }
  
  #root {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(to bottom, #ceccd1, #c4bad6 );
  }

  ::selection {
    background-color: #ffd800;
  }
`;
