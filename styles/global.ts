import { css } from '@emotion/react';

const global = css`
  @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
  @import '../styles/variables.scss';
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  input,
  button {
    outline: none;
  }

  body,
  html {
    height: 100%;
    background-color: $background-color;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  ::selection {
    background-color: transparent;
  }
`;

export default global;
