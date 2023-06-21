import { Link } from "react-router-dom";

import { Container, Card } from "./styles";
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { HeaderUser } from "../../components/HeaderUser";
import { WelcomeDiv } from "../../components/WelcomeDiv"
import { ButtonDish } from "../../components/ButtonDish"

import { TfiReceipt } from 'react-icons/tfi' 
import { FiPlus } from 'react-icons/fi' 
import { FiMinus } from 'react-icons/fi' 

export function DetailsUser(){
  return(
    <Container>
      <HeaderUser icon={TfiReceipt} title="Pedidos (0)"></HeaderUser>
      <main>
        <WelcomeDiv />
        <Section className="section1" title="Refeições">
          <Link to="/dish">
            <Card className="card">
              <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
              <h2>Salada Ravanello</h2>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
              <h3>R$ 49,97</h3>
              <div>
                <div className="divCount">
                  <ButtonDish icon={FiMinus} className="buttonMinus"/>
                  <h4>01</h4>
                  <ButtonDish icon={FiPlus} className="buttonPlus"/>
                </div>
                <ButtonDish title="Incluir"/>
              </div>
            </Card>
          </Link>
          <Card>
            <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <h3>R$ 49,97</h3>
            <div>
              <div className="divCount">
                <ButtonDish icon={FiMinus} className="buttonMinus"/>
                <h4>01</h4>
                <ButtonDish icon={FiPlus} className="buttonPlus"/>
              </div>
              <ButtonDish title="Incluir"/>
            </div>
          </Card>
          <Card>
            <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <h3>R$ 49,97</h3>
            <div>
              <div className="divCount">
                <ButtonDish icon={FiMinus} className="buttonMinus"/>
                <h4>01</h4>
                <ButtonDish icon={FiPlus} className="buttonPlus"/>
              </div>
              <ButtonDish title="Incluir"/>
            </div>
          </Card>
        </Section>
        <Section className="section1" title="Sobremesas">
          <Card className="card">
            <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <h3>R$ 49,97</h3>
            <div>
              <div className="divCount">
                <ButtonDish icon={FiMinus} className="buttonMinus"/>
                <h4>01</h4>
                <ButtonDish icon={FiPlus} className="buttonPlus"/>
              </div>
              <ButtonDish title="Incluir"/>
            </div>
          </Card>
          <Card>
            <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <h3>R$ 49,97</h3>
            <div>
              <div className="divCount">
                <ButtonDish icon={FiMinus} className="buttonMinus"/>
                <h4>01</h4>
                <ButtonDish icon={FiPlus} className="buttonPlus"/>
              </div>
              <ButtonDish title="Incluir"/>
            </div>
          </Card>
          <Card>
            <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <h3>R$ 49,97</h3>
            <div>
              <div className="divCount">
                <ButtonDish icon={FiMinus} className="buttonMinus"/>
                <h4>01</h4>
                <ButtonDish icon={FiPlus} className="buttonPlus"/>
              </div>
              <ButtonDish title="Incluir"/>
            </div>
          </Card>
        </Section>
        <Section className="section1" title="Bebidas">
          <Card className="card">
            <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <h3>R$ 49,97</h3>
            <div>
              <div className="divCount">
                <ButtonDish icon={FiMinus} className="buttonMinus"/>
                <h4>01</h4>
                <ButtonDish icon={FiPlus} className="buttonPlus"/>
              </div>
              <ButtonDish title="Incluir"/>
            </div>
          </Card>
          <Card>
            <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <h3>R$ 49,97</h3>
            <div>
              <div className="divCount">
                <ButtonDish icon={FiMinus} className="buttonMinus"/>
                <h4>01</h4>
                <ButtonDish icon={FiPlus} className="buttonPlus"/>
              </div>
              <ButtonDish title="Incluir"/>
            </div>
          </Card>
          <Card>
            <img className="image" src="../../../assets/Images-Dishes/Mask group.png" alt="" />
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            <h3>R$ 49,97</h3>
            <div>
              <div className="divCount">
                <ButtonDish icon={FiMinus} className="buttonMinus"/>
                <h4>01</h4>
                <ButtonDish icon={FiPlus} className="buttonPlus"/>
              </div>
              <ButtonDish title="Incluir"/>
            </div>
          </Card>
        </Section>
      </main>
      <Footer />
    </Container>
    
  )
}