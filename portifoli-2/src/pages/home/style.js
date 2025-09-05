import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// animação de entrada (fade + leve subida)
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const  HEADER = styled.header`

background: black;
position: fixed;
width: 100%;
padding: 19px;
 z-index: 1000;
 height: 120px;

`
export const Titulo = styled.h2`

color: aliceblue;
display: flex;
justify-content: center;
padding: 10px;
align-items: center;

`
export const NAV = styled.nav`
display: flex;
justify-content: center;

 @media (max-width: 768px) {
    display: none;  // oculta o Nav no mobile
  }



`

export const UL = styled.ul`
display: flex;
justify-content: space-between;
gap: 30px;



`

export const Li = styled.li`
list-style: none;

`

export const A = styled(Link)`
text-decoration: none;
color: white;
font-size: 20px;
display: inline-block;
transition: all 0.6s ease-in-out;
opacity: 0.7;



&:hover{
    transform: scale(1.2);
      color: white;
      opacity: 1;
    ;
}


`

//toggle cutton

export const ToggleButton = styled.button`
 background: none;
 border:none;
 cursor:pointer; 
 display:none; /* <- sempre escondido */
 flex-direction: column;
 gap:5px;
 z-index: 1000; 
 
 @media (max-width: 750px) {
     display: flex;
   }
 span {
   width: 25px;
   height: 3px;
   background: white;
   border-radius: 3px;
   transition: all 0.3s ease;

   
 }
`

//MENU MOBILE

export const Mobilemenu = styled.div`

position: fixed;
top: 0;
right: ${({open}) =>(open ? '0' : '-100%') };
height: 100vh;
width: 250px;
background: #020202d8;
display: flex;
flex-direction: column;
padding: 2rem;
transition: right 0.3s ease;
z-index: 999;

UL {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 0;
  }


`

// footer-----------------------------

export const FOOOTER = styled.footer`

position: fixed;
left: 50%;
top: 50%;
transform: translate(-50% , -50%);
padding-top: 300px;

@media (max-width: 480px) {
  padding-top: 200px;
  
}


ul{
   display: flex;
  gap: 30px;
  justify-content: center;
  list-style: none;
  align-items: center;
}





a{
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease-in-out;

  

  &:hover { transform: scale(1.2);
     
  
  
  }
}

i{
  font-size: 30px;
  color: #646464ff;

  &:hover{
    color: #131212ff;
    

  }
}



`

export const Titulo1 = styled.div`

display: flex;
align-items: center;
justify-content: center;
padding-top: 20%;
  min-height: 50vh; /* ocupa metade da tela */
  text-align: center;
  animation: ${fadeInUp} 1.5s ease forwards;
 
;

h1{
  color: #0c0b0bff;
  font-size: 150px;
  font-weight: 200;

  word-spacing: 50px;

  border-radius: 10px;


}


  /* responsividade */
  @media (max-width: 480px) {
    h1 {
      font-size: 60px;
      word-spacing: 20px;
      padding-top: 220px;
    }
  }

`

export const TituloREDES = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
text-align: center;
animation: ${fadeInUp} 1.5s ease forwards;


h2{

  color: #363434ff;
  font-size: 30px;
  
}

@media (max-width: 480px) {
   h2 {
     font-size: 18px;
   }
}



 



`
 