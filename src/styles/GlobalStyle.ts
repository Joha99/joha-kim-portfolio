import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: ${({ theme }) => theme.fonts.sans};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.font.primary};
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    color: inherit;
    cursor: pointer;
  }
`;
