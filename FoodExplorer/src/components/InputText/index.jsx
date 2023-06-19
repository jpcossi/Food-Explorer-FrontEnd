import { Container } from "./styles.js";

export function InputText({...rest}){
  return(
    <Container>
      <input {...rest}/>
    </Container>
  )
}