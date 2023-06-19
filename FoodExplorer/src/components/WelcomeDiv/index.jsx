import { Container } from "./styles"

import {ReactComponent as ImageFruits} from '../../../assets/image-fruits.svg'

export function WelcomeDiv(){
  return (
    <Container>
      <ImageFruits></ImageFruits>
      <div className="text">
        <h1>Sabores Inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </Container>
  )
}