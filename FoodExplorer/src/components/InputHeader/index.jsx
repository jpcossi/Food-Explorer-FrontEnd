import { Container } from "./styles.js";

export function InputHeader({icon: Icon, ...rest}){
  return(
    <Container>
      {Icon && <Icon />}
      <input {...rest}/>
    </Container>
  )
}