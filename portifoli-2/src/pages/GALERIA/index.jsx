



import Header from "../../components/header";
import { useState } from "react";

import { GridContainer, Griimage,Modalorverlay,MODALCONTENT,
  Modalimagem ,  Closebutton

 } from "./style";

import imagem1 from '../../assets/img/tim.jpg'
import imagem2 from '../../assets/img/justiceiro.jpg'
import imagem3 from '../../assets/img/manobrow.jpg'
import imagem4 from '../../assets/img/kurt.jpg'

const imagens = [
  { id: 1, url: imagem1, },
  { id: 2, url: imagem2, },
  { id: 3, url: imagem3, },
  { id: 4, url: imagem4, },
]



function Gallery() {


  //estado para controlar se o modal esta aberto e qual imagem mostra

const [modalopen, setmodalopem] = useState(false)

const [selectedimagem, setselectedimagem] = useState(null)

// funcao para abri o modal com a imagem clicada
function opemmodal(imagemurl) {

  setselectedimagem(imagemurl);
  setmodalopem(true)
}

//funcao para fechar o modal

function closemodal() {


  setmodalopem(false)
  selectedimagem(null)
}

// funcao para fecha modal clicando fora da imagem
function handleoverlayclick(e) {

  if (e.Target === e.currentTarget) {

    closemodal
  }
}
  return (
    <>
      <Header titulo="Galeria" />



      {/*usamos o map para renderizar para cada url no array */}
      {/*key e obriagtorio no react para identificar iten unicos na lista */}




      {/* Container do grid com as imagens */}
      <GridContainer>
        {/* Usamos map para renderizar uma imagem para cada URL no array */}
        {/* key é obrigatório no React para identificar itens únicos na lista */}
        {imagens.map((item) => (
          <Griimage
            key={item.id}
            src={item.url}
            alt={`imagem ${item.id}`}
            onClick={() => opemmodal(item.url)}// abre o modal ao clicar

          />
        ))}
      </GridContainer>

      {/*modal; so renderiza se modal open for true */}
      {modalopen && (

        <Modalorverlay onClick={handleoverlayclick} >
          <MODALCONTENT>

            <Closebutton onClick={closemodal} aria-label="fechar modal">

              &times;

            </Closebutton>

            <Modalimagem src={selectedimagem} />

          </MODALCONTENT>

        </Modalorverlay>


      )
}

      

    </>
  );
}

export default Gallery;
