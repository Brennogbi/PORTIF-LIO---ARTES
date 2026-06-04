
import {IMAGEMSOBRE, DIVCONTAINER}  from './styles'
import Header from '../.././components/header'
import imagem from '../../assets/img/SOBRE.jpg'
import { PageTransition } from '../../components/paginade transicao/PageTransition'




function Sobre() {

    
        
   

    return (

        <PageTransition>

            <Header titulo='Sobre'/>

            
              < DIVCONTAINER>
              
              
              <IMAGEMSOBRE src={imagem} alt="foto perfil"
              
              
              
              />

              <p>Ei, ei!

Meu nome é Rhianna, mais conhecida como Rhien. Sou uma artista digital independente que adora desenhar garotas fofas, caras bonitos e paisagens de sonho.

Minha jornada começou na infância, quando minha família percebeu que eu gostava de desenhar e, segundo eles, era muito bom nisso (meus pais são sempre assim 😄). Então, meu hobby foi abraçado e frequentei alguns cursos de arte para crianças em idade pré-escolar. Depois, como era quase óbvio, entrei em cursos de arte no ensino fundamental e, posteriormente, matriculei-me no ensino médio. No ensino médio, entrei em cursos universitários de arte para quem quisesse se matricular. Meu destino foi decidido na faculdade de arquitetura,
 pois meu estilo de desenho impressionava os professores de lá</p>
              
              
              
              </DIVCONTAINER>

            





        </PageTransition>

    )



}

export default Sobre