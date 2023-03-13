import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Roboto Mono';
  font-weight: 300;
  src: url(./assets/fonts/RobotoMono-Light.ttf) format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'Roboto Mono';
  font-weight: 400;
  src: url(./assets/fonts/RobotoMono-Regular.ttf) format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'Roboto Mono';
  font-weight: 700;
  src: url(./assets/fonts/RobotoMono-Bold.ttf) format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 300;
  src: url(./assets/fonts/NotoSansKR-Light.ttf) format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 400;
  src: url(./assets/fonts/NotoSansKR-Regular.ttf) format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 700;
  src: url(./assets/fonts/NotoSansKR-Bold.ttf) format('truetype');
  font-display: swap;
}

/*
    Web Fonts from Google Fonts
  
    Use the following CSS rules to specify these families:
    font-family: 'Roboto Mono', sans-serif; 300 400 700
	font-family: 'Nato Sans KR', sans-serif; 300 400 700
*/

${reset}

a {
  text-decoration: none;
  color: inherit;
}
* {
  box-sizing: border-box;
}
html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
a, dl, dt, dd, ol, ul, li, form, label, table {
  margin: 0;
  padding: 0; 
  border: 0;
  vertical-align: baseline;
}
body {
  line-height: 1;
  font-family: 'Noto Sans KR', sans-serif;
}
ol, ul {
  list-style: none;
}
button {
  border: 0;
  background: transparent;
  cursor: pointer;
}
`;

export default GlobalStyle;
