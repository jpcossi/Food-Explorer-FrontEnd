import { Link } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../hooks/auth"
 
import { Container, Form } from "./styles";
import { InputText } from '../../components/InputText'
import { ButtonDish } from '../../components/ButtonDish'
import { ButtonTextAccount } from '../../components/ButtonTextAccount'

import {ReactComponent as Logan} from '../../../assets/logan-foodexplorer.svg'

export function SignIn(){
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 

  const { signIn } = useAuth()

  function handleSignIn(){
    signIn({ email, password })
  }

  return(
    <Container>
      <Logan />
      <Form>
        <h1 className="hidden">Faça Login</h1>
        <section className="section1">
          <h2>Email</h2>
          <InputText 
            type="text"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}>
          </InputText>
        </section>
        <section className="section2">
          <h2>Senha</h2>
          <InputText 
            type="password" 
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}>              
          </InputText>
        </section>
        <ButtonDish  className="button" title="Entrar" onClick={handleSignIn}></ButtonDish>
        <Link to="/register">
          <ButtonTextAccount title="Criar uma Conta"></ButtonTextAccount>         
        </Link>
      </Form>
    </Container>
  )
}