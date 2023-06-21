import { Link } from "react-router-dom"

import { Card, Container } from "./styles.js"

import { Footer } from "../../components/Footer/index.jsx"
import { Section } from "../../components/Section/index.jsx"
import { HeaderAdmin } from "../../components/HeaderAdmin/index.jsx"
import { WelcomeDiv } from "../../components/WelcomeDiv/index.jsx"

import {ReactComponent as Edit} from '../../../assets/edit.svg'

export function DetailsAdmin() {   
  return(
    <Container>
      <HeaderAdmin title='Novo Prato'></HeaderAdmin>
      <main>
        <WelcomeDiv></WelcomeDiv>
        <Section title="Refeições">
          <Link to="/dishAdmin">
            <Card>
              <div className="edit">
                <Link to="/edit">
                  <Edit></Edit>
                </Link>
              </div>
              <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
              <h2>Salada Ravanello</h2>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
              <h3>R$ 49,97</h3>
            </Card>
          </Link>
          <Card>
            <div className="edit">
              <Link to="/edit">
                <Edit></Edit>
              </Link>
            </div>
            <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <h3>R$ 49,97</h3>
          </Card>
          <Card>
            <div className="edit">
              <Link to="/edit">
                <Edit></Edit>
              </Link>
            </div>
            <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <h3>R$ 49,97</h3>
          </Card>
        </Section>
        <Section title="Sobremesas">
          <Card>
            <div className="edit">
              <Link to="/edit">
                <Edit></Edit>
              </Link>
            </div>
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
      </main>  
      <Footer></Footer>
    </Container>
  )
}
