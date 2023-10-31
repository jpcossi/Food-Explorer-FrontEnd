import { Container } from "./styles.js";

export function InputHeader({children, icon: Icon, ...rest}){
  return(
    <Container className="inputHeader hidden">
      {children}
    </Container>
  )
}

//<input {...rest}/>