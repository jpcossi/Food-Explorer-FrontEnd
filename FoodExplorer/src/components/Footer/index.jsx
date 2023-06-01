import { Container } from "./styles.js";
import {ReactComponent as LoganFooter} from '../../../assets/logan-footer.svg'

export function Footer(){
  return(
    <Container>
      <LoganFooter></LoganFooter>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}