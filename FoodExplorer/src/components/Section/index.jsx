import { Container } from './styles.js'

export function Section({title, children, ...rest}){
  return(
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>      
  )
}