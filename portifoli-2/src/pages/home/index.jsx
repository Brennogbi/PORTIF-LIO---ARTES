import {
   FOOOTER
  , Titulo1, TituloREDES
} from './style'
import 'bootstrap-icons/font/bootstrap-icons.css'


import Header from '../../components/header'
import { PageTransition } from '../../components/paginade transicao/PageTransition'









function Home() {


 
  return (


     
    
    <PageTransition>
       {/**usei o componente Header */}
      <Header titulo='Breno Santos'/> 

      <Titulo1>

        <h1>Arte Santos</h1>

      </Titulo1>



      <FOOOTER>

        <TituloREDES>

          <h2>Artista Tradicional & Digital</h2>

        </TituloREDES>



        <ul>

          <li><a href=""><i class="bi bi-instagram"></i></a></li>
          <li><a href=""><i class="bi bi-tiktok"></i></a></li>

          <li><a href=""><i class="bi bi-linkedin"></i></a></li>
          <li><a href=""></a></li>
        </ul>





      </FOOOTER>

    </PageTransition>
  )
}

export default Home
