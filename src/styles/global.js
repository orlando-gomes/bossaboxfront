import { createGlobalStyle } from 'styled-components';
// import 'react-toastify/dist/ReactToastify.css';

// import 'react-perfect-scrollbar/dist/css/styles.css';
export default createGlobalStyle`
  /*
  Imported by tag link into the <head> of index.html
  CSS rules to specify families
    font-family: 'Source Sans Pro', sans-serif;
  */

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    ${(props) =>
      props.location.pathname === '/vuttrsignin' ||
      props.location.pathname === '/vuttrsignup'
        ? 'overflow: hidden;'
        : 'height: 100%;'}
    background: #ffffff;
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    /*font: 20px 'Source Sans Pro', sans-serif; */
    font: 2.0rem 'Source Sans Pro', sans-serif;
    color: #170C3A;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
/*
selector {font: style variant weight size/line-height family}
*/
