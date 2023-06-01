import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.Dark_400};
    color: ${({ theme }) => theme.COLORS.Light_100};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea{
    font-family: 'Roboto', sans-serif;
    font-size: 16 px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  buttom:hover, a:hover{
      filter: brightness(0.9);
  }
`
