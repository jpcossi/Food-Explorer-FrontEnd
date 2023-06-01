import { Container } from "./styles.js";

export function ButtonDish({title, ...rest}){
  return(
    <Container
      type="button"
      {...rest}
    >
    {title}
    </Container>

  )
}