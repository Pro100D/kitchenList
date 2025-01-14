import { css } from '@emotion/react';

export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap');

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 16;
    font-style: normal;
    color: black;
    background-color: white;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    font: inherit;
    color: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  // ============== scrollbar ==============

  body {
    &::-webkit-scrollbar {
      width: 16px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: black;
      border: 6px solid black;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: black;
    }
  }
`;
