import { Container } from './styles'
// ...rest pega todas as propiredades pra nao ficar precisando declarar uma por uma
export function Button({ title, loading = false, ...rest }){
  return(
      <Container 
        type='button'
        disabled={loading}
        {...rest}
      >
        {loading ? 'Carregando...' : title}

      </Container>

  )
}