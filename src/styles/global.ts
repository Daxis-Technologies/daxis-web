import { createGlobalStyle } from 'styled-components';

interface GlobalStyleProps {
  fontScale: number;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  :root {
    color-scheme: ${({ theme }) => theme.mode};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  #root {
    min-height: 100vh;
  }

  body, #root {
    font-size: ${({ fontScale }) => 16 * fontScale}px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font: inherit;
  }
`;