import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: linear-gradient(-180deg, #2d3436 0%, #000000 45%);
    background-repeat: no-repeat;
    background-color: black;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #8892b0;
    line-height: 1.3;
  }
  ::selection {
    background-color: blue;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: white;
    margin: 0 0 10px 0;
  }
  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }
  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    cursor: pointer;
    &:hover,
    &:focus {
      outline: 0;
    }
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    &:focus,
    &:active {
    }
  }
  input, textarea {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
  p {
    margin: 0 0 15px 0;
  }
`;

export default GlobalStyle;