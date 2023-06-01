import { Container } from './styles.js'

import { Tags } from '../../components/Tags'
import { Footer } from '../../components/Footer'
import { ButtonDish } from '../../components/ButtonDish'
import { ButtonTextBack } from '../../components/ButtonTextBack'
import { Header } from '../../components/Header/index.jsx'

export function ShowDish(){
  return(
    <Container>
      <Header title="Novo Prato"></Header>
      <main>
        <ButtonTextBack title="voltar"></ButtonTextBack>
        <div className='hero'> 
          <section className='left'>
            <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
          </section>
          <section className='right'>
              <h1>Salada Ravanello</h1>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados
                 com gergelim. O pão naan dá um toque especial.</p>
              <div class="tags">
                <Tags title="Alface"></Tags>
                <Tags title="Tomate"></Tags>
                <Tags title="Agrião"></Tags>
                <Tags title="Pão Naan"></Tags>
              </div>
              <ButtonDish title="Editar Prato"></ButtonDish>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </Container>
  )
}