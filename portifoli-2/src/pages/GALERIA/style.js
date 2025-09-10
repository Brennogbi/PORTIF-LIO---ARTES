import styled  from "styled-components";


export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 8px;
  padding-top: 140px  ; /* espaço para o header fixo */
  
  
  
  
  

  

`;


export const Griimage = styled.img`



width: 90%;
border-radius: 8px;
cursor: pointer;
display: block;

`
// Fundo escuro do modal, cobrindo toda a tela
export const Modalorverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo preto semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Fica acima de tudo */
`;

// Container da imagem ampliada dentro do modal
export const MODALCONTENT = styled.div`
  position: relative;
  max-width: 70%;
  max-height: 70%;

  @media (max-width: 480px) {

position: relative;
  max-width: 90%;
  max-height: 90%;
    
  }
`;

// Imagem ampliada no modal
export const Modalimagem = styled.img`
  width: 55vh;
  height: auto;
  border-radius: 8px;
  left: auto;

    @media (max-width: 480px) {

        width: 100%;
        height: auto;
        border-radius: 8px;
    
  }

  

`;



// Botão para fechar o modal
export const Closebutton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
`;







