import { motion } from 'framer-motion'
import { useEffect, useState } from "react"
import { Link, useNavigate} from "react-router-dom"


import { api } from "../../services/api.js"

import { Container, Form, InputImage, InputSelect, Item} from "./styles.js"

import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/Footer'
import { TextArea } from '../../components/TextArea'
import { InputText } from '../../components/InputText'
import { NewItem } from '../../components/NewItem'
import { ButtonDish } from "../../components/ButtonDish"
import { DishesSearch } from "../../components/DishesSearch"
import { ButtonTextBack } from '../../components/ButtonTextBack'


import {ReactComponent as Download} from '../../../assets/download.svg'

export function NewDish(){
  const form = document.querySelector(".first .body-content .form")
  let close = document.querySelector(".close")
  let newDish = document.querySelector(".newDish")
  let menu = document.querySelector(".main .menu")
  let input2 = document.querySelector(".inputHeader #input2")

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")

  const [image, setImage] = useState(null)
  const [imageFile, setImageFile] = useState(null)

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  async function handleNewDish(){    
    await api.post("/dishes", {
      name,
      price,
      description,
      category,
      ingredients
    })

    const dish = await api.get(`/dishes?name=${name}`);
    const fileUploadForm = new FormData()
    fileUploadForm.append("image", imageFile)
    const response = await api.patch(`/dishes/image/${dish.data[3].dishByName[0].id}`, fileUploadForm) 
    dish.data[3].dishByName[0].image = response.data.image

    alert("Prato criado com sucesso!")
    navigate("/")
  }

  function handleAddTag(){
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveTag(deleted){
    setIngredients(prevState =>prevState.filter(tag => tag !== deleted))
  }

  function handleChangeImage(event){
    const file = event.target.files[0]
    setImageFile(file)
    const imagePreview = URL.createObjectURL(file)
    setImage(imagePreview)
  }

  if(menu){
    menu.addEventListener("click", () => {
      if(form != null){
        form.classList.add("hide") 
      }
    })    
  }

  if(input2){
    close.addEventListener("click", () => {
      setSearch("")
      input2.value = ""
    })
  }

  if(newDish){  
    if(form){
      let e = menu.classList.contains("hidden")
      if(search === "" && e == true){        
        form.classList.add("hide")
      }  
    }

    close.addEventListener("click", () => {
      if(form != null){
        form.classList.remove("hide")
      }
    })
  }

  useEffect(() => {
    async function fetchSearch(){
      const response = await api.get(`/dishes?name=${search}&ingredients=${search}`);
      setDishes(response.data[3].dishByName)
    }

    fetchSearch()
  }, [search])

  return(
    <Container>
      {search === "" ? 
      <div className='first'>
        <div className='body-content'>
          <HeaderAdmin title="Novo Prato">
            <input 
              type="text"
              placeholder="Busque por pratos ou ingredientes" 
              onChange={(e) => setSearch(e.target.value)}
            />
          </HeaderAdmin>
          <div className='form'>
            <Form>
              <Link to="/">
                <ButtonTextBack title="voltar"></ButtonTextBack>
              </Link>
              <h1>Adicionar Prato</h1>
              <div className="hero">
                <section className="section1">
                  <div className="divImg">
                    <h2>Imagem do Prato</h2>
                    <InputImage>                
                      <label htmlFor="avatar">
                        <Download></Download>
                        {(imageFile === null || imageFile === undefined) ? <h2>Selecionar Imagem</h2> : <h2>{imageFile.name}</h2>}
                        <input 
                          id="avatar" 
                          type="file"
                          onChange={handleChangeImage}
                        />
                      </label>
                    </InputImage>                 
                  </div>
                  <div className="divName">
                    <h2>Nome</h2>
                    <InputText 
                      placeholder="Ex.: Salada Ceasar"
                      onChange={e => setName(e.target.value)}
                      > 
                    </InputText>
                  </div>
                  <div className="divCategory">
                    <h2>Categoria</h2>
                    <InputSelect>
                    <label htmlFor="category">
                      <select className="select" id="category" name="Categoria" value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="" >--------------------------------</option>
                        <option value="Refeições" >Refeições</option>
                        <option value="Sobremesas" >Sobremesas</option>
                        <option value="Bebidas" >Bebidas</option>
                      </select>
                    </label>  
                    </InputSelect>
                  </div>
                </section>
                <section className="section2">
                  <div className="divIngr">
                    <h2>Ingredientes</h2>
                    <Item>
                      {
                        ingredients.map((tag, index) => (
                          <NewItem
                            key={String(index)}
                            value={tag}
                            onClick={() => handleRemoveTag(tag)}
                          />
                        ))
                      }
                      <NewItem 
                        isNew 
                        placeholder="Adicionar"
                        onChange={e => setNewIngredient(e.target.value)}
                        value={newIngredient}
                        onClick={handleAddTag}
                        >                    
                      </NewItem>
                    </Item>
                  </div>
                  <div className="divPrice">
                    <h2>Preço</h2>
                    <InputText 
                      placeholder="R$ 00,00"
                      onChange={e => setPrice((e.target.value) * (100))}                
                    >  
                    </InputText>
                  </div>
                </section>
                <section className="section3">
                  <div className="divDescription">
                    <h2>Descrição</h2>
                    <TextArea 
                      placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                      onChange={e => setDescription(e.target.value)}>
                    </TextArea>
                  </div>
                </section>
                <section className="section4">
                  <div className="divButton">
                    <ButtonDish 
                      title="Salvar Alterações" 
                      onClick={handleNewDish}>
                    </ButtonDish>
                  </div>
                </section>
              </div>
            </Form>
          </div>
        </div>
        <Footer></Footer>
      </div> :
      <div className="search">
        <div className='body-content'>
          <HeaderAdmin title='Novo Prato'>
            <input 
              type="text"
              placeholder="Busque por pratos ou ingredientes" 
              onChange={(e) => setSearch(e.target.value)}
              id='input2'
            />
          </HeaderAdmin>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="dishSearch">
              <h1>Pesquisas Releacionadas a "{search}"</h1>            
              {
                dishes.map(dish => (
                  <motion.div key={String(dish.id)}     >
                    <DishesSearch className="dish"        
                      data={dish}>
                    </DishesSearch>
                  </motion.div>
                ))
              }
          </motion.div>
        </div>
        <Footer></Footer>
      </div>}
    </Container>
  )
}