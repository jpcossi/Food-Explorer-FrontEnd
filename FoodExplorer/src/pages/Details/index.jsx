import { Container } from "./styles.js"
import { Card } from "./styles.js"
import { Header } from "../../components/Header"
import { WelcomeDiv } from "../../components/WelcomeDiv"

import {ReactComponent as ImageFruits} from '../../../assets/image-fruits.svg'
import {ReactComponent as Edit} from '../../../assets/edit.svg'
import { Section } from "../../components/Section/index.jsx"
export function Details() {   
  return(
    <Container>
      <Header title='Novo Prato' loading>
      </Header>
      <div className="fruit">
        <ImageFruits />      
      </div>
      <WelcomeDiv></WelcomeDiv>
      <h1>Refeições</h1>
      <Section>
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
      <Section title="Sobremesa">

      </Section>
      <Section title="Bebidas">

      </Section>


    </Container>
  )
}
