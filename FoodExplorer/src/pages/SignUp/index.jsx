import { Link } from "react-router-dom";

import { Container, Form } from "./styles";
import { InputText } from '../../components/InputText'
import { ButtonDish } from '../../components/ButtonDish'
import { ButtonTextAccount } from '../../components/ButtonTextAccount'

import {ReactComponent as Logan} from '../../../assets/logan-foodexplorer.svg'

export function SignUp(){
  return(
    <Container>
      <Logan />
      <Form>
        <h1>Crie sua conta</h1>
        <section className="section1">
          <h2>Seu Nome</h2>
          <InputText placeholder="Exemplo: Maria da Silva"></InputText>
        </section>
        <section className="section2">
          <h2>Email</h2>
          <InputText placeholder="Exemplo: exemplo@exemplo.com.br"></InputText>
        </section>
        <section className="section3">
          <h2>Senha</h2>
          <InputText type="password" placeholder="No mínimo 6 caracteres"></InputText>
        </section>
        <ButtonDish  className="button" title="Criar conta"></ButtonDish>
        <Link to="/">
          <ButtonTextAccount title="Já tenho uma Conta"></ButtonTextAccount> 
        </Link>
      </Form>
    </Container>
  )
}