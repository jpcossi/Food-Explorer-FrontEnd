import { Container } from './styles.js'
import {ReactComponent as Back} from '../../../assets/back.svg'

export function ButtonTextBack({title, ...rest}){
  return(
    <Container
      type='button'
      {...rest}
    >
      <Back className="icon-left"/>
      <h1>{title}</h1>
    </Container>
  )  
}