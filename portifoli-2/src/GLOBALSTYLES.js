import { createGlobalStyle } from "styled-components";
import narutoImg from "./assets/naruto.jpg"; // se a imagem estiver no src/assets

export const GLOBALSTYLES = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Telma', sans-serif;
  }

  body {
    min-height: 100vh;
    background: url(${narutoImg}) center/cover no-repeat; //faz o ovelay da image usa before pra configura
    position: relative;
    color: #fff; /* deixa o texto branco em cima da imagem */
    font-family: Arial, Helvetica, sans-serif;
     
   
    
   

  }

  body::before {
    content: "";
    position: fixed; /* fica sempre fixo mesmo ao scrollar */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(238, 236, 236, 0.84); /* controla a opacidade */
    z-index: -9999; /* garante que fique atrás do conteúdo */
   
  }
`;

export default GLOBALSTYLES;
