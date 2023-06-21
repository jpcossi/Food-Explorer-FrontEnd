import { Link } from "react-router-dom";

import { Container, Form } from "./styles";
import { InputText } from '../../components/InputText'
import { ButtonDish } from '../../components/ButtonDish'
import { ButtonTextAccount } from '../../components/ButtonTextAccount'

import {ReactComponent as Logan} from '../../../assets/logan-foodexplorer.svg'

export function SignIn(){
  return(
    <Container>
      <Logan />
      <Form>
        <h1>Faça Login</h1>
        <section className="section1">
          <h2>Email</h2>
          <InputText placeholder="Exemplo: exemplo@exemplo.com.br"></InputText>
        </section>
        <section className="section2">
          <h2>Senha</h2>
          <InputText type="password" placeholder="No mínimo 6 caracteres"></InputText>
        </section>
        <ButtonDish  className="button" title="Entrar"></ButtonDish>
        <Link to="/register">
          <ButtonTextAccount title="Criar uma Conta"></ButtonTextAccount>         
        </Link>
      </Form>
    </Container>
  )
}