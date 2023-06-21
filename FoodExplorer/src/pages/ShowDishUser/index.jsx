import { Link } from "react-router-dom";

import { Container } from "./styles";
import { Tags } from "../../components/Tags";
import { Footer } from "../../components/Footer";
import { HeaderUser } from '../../components/HeaderUser'
import { ButtonDish } from "../../components/ButtonDish";
import { ButtonTextBack } from "../../components/ButtonTextBack";

import { FiPlus } from 'react-icons/fi' 
import { FiMinus } from 'react-icons/fi'  
import { TfiReceipt } from 'react-icons/tfi'

export function ShowDishUser(){
  return (
    <Container>
      <HeaderUser icon={TfiReceipt} title="Pedidos (0)"></HeaderUser>
      <main>
        <Link to="/home">
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
            <div className="divCount">
              <div className="Count">
                <ButtonDish icon={FiMinus} className="buttonMinus"/>
                <h4>01</h4>
                <ButtonDish icon={FiPlus} className="buttonPlus"/>
              </div>
              <ButtonDish title="Incluir - R$ 25,00"/>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Container>
  )
}