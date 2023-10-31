import { Container } from "./styles.js";
import {ReactComponent as LoganFooter} from '../../../assets/logan-footer.svg'

export function Footer(){
  return(
    <Container>
      <div>
        <LoganFooter className="logan"></LoganFooter>
      </div>
      <div>
        <p>© 2023 - Todos os direitos reservados.</p>
      </div>
    </Container>
  )
}