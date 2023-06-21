import { Link } from 'react-router-dom'

import { Container } from './styles.js'

import { Tags } from '../../components/Tags'
import { Footer } from '../../components/Footer'
import { ButtonDish } from '../../components/ButtonDish'
import { ButtonTextBack } from '../../components/ButtonTextBack'
import { HeaderAdmin } from '../../components/HeaderAdmin'

export function ShowDishAdmin(){
  return(
    <Container>
      <HeaderAdmin title="Novo Prato"></HeaderAdmin>
      <main>
        <Link to="/homeAdmin">
          <ButtonTextBack title="voltar"></ButtonTextBack>
        </Link>
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
              <Link to="/edit">
                <ButtonDish title="Editar Prato"></ButtonDish>
              </Link>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </Container>
  )
}