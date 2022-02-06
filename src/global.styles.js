import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 400;
  font-family: sans-serif;
  box-sizing: border-box;
  scroll-behavior: smooth;
  -webkit-tap-highlight-color: rgba(0 0 0 0%);
}
  body {
    margin: 0;
    padding: 0;
    background-color: #202124;
    overflow-x: hidden;
  }

  *,
*::before,
*::after {
  box-sizing: inherit;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: white;
}

a:active {
  color: blueviolet;
}

span {
    color: #E2E2E3;
}

`;
