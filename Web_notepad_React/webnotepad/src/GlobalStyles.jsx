import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
    font-family: 'TheJamsil5Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

* {
  padding: 0;
  margin: 0;
  font-family: 'TheJamsil5Bold';
}

ul,
li {
  list-style: none;
}

a,
button {
  cursor: pointer;
  text-decoration: none;
}

img {
  width: 100%;
  vertical-align: top;
}

.a11y-hidden {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

body {
  background-color: #012638;
}
`;
