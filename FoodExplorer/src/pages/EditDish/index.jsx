import { Container, Form, InputImage, InputSelect, Item} from "./styles.js"
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/Footer'
import { TextArea } from '../../components/TextArea'
import { InputText } from '../../components/InputText'
import { NewItem } from '../../components/NewItem'
import { ButtonDish } from "../../components/ButtonDish"
import { ButtonTextBack } from '../../components/ButtonTextBack'

import {ReactComponent as Download} from '../../../assets/download.svg'

export function EditDish(){
  return(
    <Container>
      <HeaderAdmin title="Novo Prato"></HeaderAdmin>
      <Form>
        <ButtonTextBack title="voltar"></ButtonTextBack>
        <h1>Editar Prato</h1>
        <div className="hero">
          <section className="section1">
            <div className="divImg">
              <h2>Imagem do Prato</h2>
              <InputImage>                
                <label htmlFor="avatar">
                  <Download></Download>
                  <h2>Selecionar Imagem</h2>
                  <input id="avatar" type="file"/>
                </label>
              </InputImage>                 
            </div>
            <div className="divName">
              <h2>Nome</h2>
              <InputText placeholder="Salada Ceasar"></InputText>
            </div>
            <div className="divCategory">
              <h2>Categoria</h2>
              <InputSelect>
              <label for="Category">
                <select className="select" id="Category" name="Categoria">
                  <option value="Refeições">Refeições</option>
                  <option value="Sobremesas">Sobremesas</option>
                  <option value="Bebidas">Bebidas</option>
                </select>
              </label>  
              </InputSelect>
            </div>
          </section>
          <section className="section2">
            <div className="divIngr">
              <h2>Ingredientes</h2>
              <Item>
                <NewItem value="Alface"></NewItem>
                <NewItem isNew placeholder="Adicionar"></NewItem>
              </Item>
            </div>
            <div className="divPrice">
              <h2>Preço</h2>
              <InputText placeholder="R$ 00,00"></InputText>
            </div>
          </section>
          <section className="section3">
            <div className="divDescription">
              <h2>Descrição</h2>
              <TextArea placeholder="A Salada Cesar é uma opção refrescante para o verão"></TextArea>
            </div>
          </section>
          <section className="section4">
            <div className="divButton">
              <ButtonDish title="Excluir Prato"></ButtonDish>
              <ButtonDish title="Salvar Alterações"></ButtonDish>
            </div>
          </section>
        </div>
      </Form>
      <Footer className="footer"></Footer>
    </Container>
  )
}