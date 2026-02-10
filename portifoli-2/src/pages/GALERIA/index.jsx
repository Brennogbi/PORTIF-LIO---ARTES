import Header from "../../components/header";
import { useState } from "react";

import { GridContainer, GridImage, ModalOverlay, MODALCONTENT,
  Modalimagem, Closebutton
} from "./style";

import imagem1 from '../../assets/img/tim.jpg'
import imagem2 from '../../assets/img/justiceiro.jpg'
import imagem3 from '../../assets/img/manobrow.jpg'
import imagem4 from '../../assets/img/kurt.jpg'
import imagem5 from '../../assets/img/naruto.jpg'

const imagens = [
  { id: 5, url: imagem1 },
  { id: 2, url: imagem2 },
  { id: 3, url: imagem3 },
  { id: 4, url: imagem4 },
  { id: 1, url: imagem5 },
]

function Gallery() {
  const [modalopen, setmodalopen] = useState(false);
  const [selectedimagem, setselectedimagem] = useState(null);

  function openmodal(imagemurl) {
    setselectedimagem(imagemurl);
    setmodalopen(true);
  }

  function closemodal() {
    setmodalopen(false);
    setselectedimagem(null);
  }

  function handleoverlayclick(e) {
    if (e.target === e.currentTarget) {
      closemodal();
    }
  }

  return (
    <>
      <Header titulo="Galeria" />

      <GridContainer>
        {imagens.map((item) => (
          <GridImage
            key={item.id}
            src={item.url}
            alt={`imagem ${item.id}`}
            onClick={() => openmodal(item.url)}
          />
        ))}
      </GridContainer>

      {modalopen && selectedimagem && (
        <ModalOverlay onClick={handleoverlayclick}>
          <MODALCONTENT>
            <Closebutton onClick={closemodal} aria-label="fechar modal">
              &times;
            </Closebutton>
            <Modalimagem src={selectedimagem} alt="imagem ampliada" />
          </MODALCONTENT>
        </ModalOverlay>
      )}
    </>
  );
}

export default Gallery;