import { Container } from "./styles.js";

export function ButtonDish({icon: Icon, title, ...rest}){
  return(
    <Container
      type="button"
      {...rest}
      >
    {Icon && <Icon />}
    {title}
    </Container>

  )
}