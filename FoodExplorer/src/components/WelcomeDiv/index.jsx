import { Container } from "./styles"

import {ReactComponent as ImageFruits} from '../../../assets/image-fruits.svg'
import {ReactComponent as ImageFruitsMobile} from '../../../assets/image-fruits-mobile.svg'

export function WelcomeDiv(){
  return (
    <Container>
      <ImageFruits className="hidden"></ImageFruits>
      <div className="text">
        <h1>Sabores Inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </Container>
  )
}