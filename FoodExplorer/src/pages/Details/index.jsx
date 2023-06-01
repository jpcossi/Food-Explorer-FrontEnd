import { Card, Container } from "./styles.js"

import { Tags } from "../../components/Tags"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { WelcomeDiv } from "../../components/WelcomeDiv"
import { ButtonTextBack } from "../../components/ButtonTextBack"
import { ButtonTextAccount } from "../../components/ButtonTextAccount"

import {ReactComponent as ImageFruits} from '../../../assets/image-fruits.svg'
import {ReactComponent as Edit} from '../../../assets/edit.svg'

export function Details() {   
  return(
    <Container>
      <Header title='Novo Prato' loading></Header>
      <div className="fruit">
        <ImageFruits />      
      </div>
      <WelcomeDiv></WelcomeDiv>
      <Section title="Refeições">
        <div className="break"></div>
        <Card>
          <Edit></Edit>
          <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
          <h2>Salada Ravanello</h2>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
          <h3>R$ 49,97</h3>
        </Card>
        <Card>
          <Edit></Edit>
          <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
          <h2>Salada Ravanello</h2>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
          <h3>R$ 49,97</h3>
         </Card>
        <Card>
        <Edit></Edit>
          <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
          <h2>Salada Ravanello</h2>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
          <h3>R$ 49,97</h3>
        </Card>
      </Section>
      <Footer></Footer>
      <div>
        <Tags title="Alface"></Tags>      
        <Tags title="Tomate"></Tags>      
      </div>
      <div>
        <ButtonTextBack title="voltar"></ButtonTextBack>
      </div>
      <div>
        <ButtonTextAccount title="Já tenho uma conta"></ButtonTextAccount>
        <ButtonTextAccount title="Criar uma Conta"></ButtonTextAccount>
      </div>
    </Container>
  )
}
