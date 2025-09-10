import styled from "styled-components";


export const DIVCONTAINER = styled.div`

display: flex;
justify-content: center;
align-items: center;
gap: 50px;

@media (max-width: 480px) {

    flex-direction: column;
    
}



padding-top: 140px  ; /* espaço para o header fixo */

p{
    font-size: 20px;
    width: 400px;
    color: black;

    @media (max-width: 480px) {

        width: 300px;
        
    }
   
}


`

export const IMAGEMSOBRE = styled.img`
width: 400px;
border-radius: 40px;
transition: all 0.03s ease-in-out;



@media (max-width: 480px) {

    width: 18rem;
    
}




`