import styled from "styled-components";
import { Link } from "react-router-dom";



export const  HEADER = styled.header`

background: black;
position: fixed;
top: 0;              /* <- fixa no topo da tela */
  left: 0;             /* <- garante que comece da esquerda */
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
gap: 30px;

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

// ToggleButtonX FECHAR

export const ToggleButtonX = styled.button`


 background: none;
 border:none;
 cursor:pointer; 
 display:none; /* <- sempre escondido */

 gap:5px;
 z-index: 1000; 
 
 @media (max-width: 750px) {
     display: flex;
   }
 i{
    font-size: 30px;
   color: #fff;
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