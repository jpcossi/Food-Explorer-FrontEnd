import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api"

import { Container, Form } from "./styles";
import { InputText } from '../../components/InputText'
import { ButtonDish } from '../../components/ButtonDish'
import { ButtonTextAccount } from '../../components/ButtonTextAccount'

import {ReactComponent as Logan} from '../../../assets/logan-foodexplorer.svg'

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

   function handleSignUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos!")
    }
    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('usuario cadastrado com sucesso');
        navigate("/")
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('nao foi possivel cadastrar');
        }
      });
  }

  return(
    <Container>
      <Logan />
      <Form>
        <h1 className="hidden">Crie sua conta</h1>
        <section className="section1">
          <h2>Seu Nome</h2>
          <InputText
            type="text" 
            placeholder="Exemplo: Maria da Silva"
            onChange={e => setName(e.target.value)}>
          </InputText>
        </section>
        <section className="section2">
          <h2>Email</h2>
          <InputText
            type="text" 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}>
            </InputText>
        </section>
        <section className="section3">
          <h2>Senha</h2>
          <InputText 
            type="password" 
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}>            
          </InputText>
        </section>
        <ButtonDish  className="button" title="Criar conta" onClick={handleSignUp}></ButtonDish>
        <Link to="/">
          <ButtonTextAccount title="Já tenho uma Conta"></ButtonTextAccount> 
        </Link>
      </Form>
    </Container>
  )
}