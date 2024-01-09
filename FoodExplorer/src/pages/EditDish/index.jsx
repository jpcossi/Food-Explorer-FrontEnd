import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

import { motion } from 'framer-motion'

import { Container, Form, InputImage, InputSelect, Item} from "./styles.js"

import { api } from "../../services/api.js"

import { Footer } from '../../components/Footer'
import { NewItem } from '../../components/NewItem'
import { TextArea } from '../../components/TextArea'
import { InputText } from '../../components/InputText'
import { ButtonDish } from "../../components/ButtonDish"
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { DishesSearch } from "../../components/DishesSearch"
import { ButtonTextBack } from '../../components/ButtonTextBack'

import {ReactComponent as Download} from '../../../assets/download.svg'

export function EditDish(){   
  const form = document.querySelector(".first .body-content .form")
  let close = document.querySelector(".close")
  let newDish = document.querySelector(".newDish")
  let menu = document.querySelector(".main .menu")
  let input2 = document.querySelector(".inputHeader #input2")

  const [dish, setDish] = useState([])

  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState("")
  
  const [name, setName] = useState("") 
  const [price, setPrice] = useState("") 
  const [category, setCategory] = useState("") 
  const [description, setDescription] = useState("")

  const ImageUrl = `${api.defaults.baseURL}/files/${dish.image}`
  const [image, setImage] = useState(ImageUrl)
  const [imageFile, setImageFile] = useState(null)

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("") 

  const params = useParams()

  const navigate = useNavigate()
  
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

  async function handleDeleteDish(){
    await api.delete(`/dishes/${params.id}`)
    alert("Prato deletado com sucesso!")
    navigate("/")
  }

  async function handleUpdateDish(){
    const dish = {      
      name,
      price,
      description,
      category,
      ingredients      
    }
    try{
      await api.put(`/dishes/${params.id}`, dish)

      const fileUploadForm = new FormData()
      fileUploadForm.append("image", imageFile)
      await api.patch(`/dishes/image/${params.id}`, fileUploadForm)
  
      alert("Prato alterado com sucesso!")
      navigate("/")
    }catch(error){
      if(error.response){
       alert(error.response.data.message)
      }
    }
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
    async function fetchDishes() {
      let inputName = document.querySelector(".inputName")
      let inputPrice = document.querySelector(".inputPrice")
      let inputDescription = document.querySelector(".inputDescription")
      const response = await api.get(`/dishes/${params.id}`)
      setDish(response.data)
      setIngredients(response.data.ingredients)

      inputName.value = response.data.name
      inputDescription.value = response.data.description
      const newPriceFormat = `R$ ${response.data.price/100}`
      inputPrice.value = newPriceFormat
      
    }    
    fetchDishes();
    
  }, []);

  useEffect(() => {
    async function fetchSearch(){
      const response = await api.get(`/dishes?name=${search}&ingredients=${search}`);
      setDishes(response.data[3].dishByName)
    }

    fetchSearch()
  }, [search])

  const Oldprice = `R$ ${dish.price/100}`

  return(
    <Container>
      {search === "" ? 
        <div className="first">
          <div className="body-content">
            <HeaderAdmin title="Novo Prato">
              <input 
                type="text"
                placeholder="Busque por pratos ou ingredientes" 
                onChange={(e) => setSearch(e.target.value)}
              />
            </HeaderAdmin>
            <div className="form">
              <Form>
                <Link to="/">
                  <ButtonTextBack title="voltar"></ButtonTextBack>
                </Link>
                <h1>Editar Prato</h1>
                <div className="hero">
                  <section className="section1">
                    <div className="divImg">
                      <h2>Imagem do Prato</h2>
                      <InputImage>                
                        <label htmlFor="avatar">
                          <Download></Download>
                          {(imageFile === null || imageFile === undefined) ? <h2>{dish.image}</h2> : <h2>{imageFile.name}</h2>}
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
                        className="inputName"
                        placeholder={dish.name}
                        onChange={e => setName(e.target.value)}>                  
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
                              value={tag.name ? tag.name : tag}
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
                        className="inputPrice"
                        placeholder={Oldprice}
                        onChange={e => setPrice((e.target.value) * (100))}>
                      </InputText>
                    </div>
                  </section>
                  <section className="section3">
                    <div className="divDescription">
                      <h2>Descrição</h2>
                      <TextArea 
                        className="inputDescription"                        
                        placeholder={dish.description}
                        onChange={e => setDescription(e.target.value)}> 
                      </TextArea>
                    </div>
                  </section>
                  <section className="section4">
                    <div className="divButton">
                      <ButtonDish 
                        title="Excluir Prato"
                        onClick={handleDeleteDish}>
                      </ButtonDish>
                      <ButtonDish 
                        title="Salvar Alterações"
                        onClick={handleUpdateDish}>                  
                      </ButtonDish>
                    </div>
                  </section>
                </div>
              </Form>
            </div>
          </div>
          <Footer className="footer"></Footer>
      </div> :
      <div className="search">
        <div className="body-content">
          <HeaderAdmin title='Novo Prato'>
            <input 
              type="text"
              placeholder="Busque por pratos ou ingredientes" 
              onChange={(e) => setSearch(e.target.value)}
              id="input2"
            />
          </HeaderAdmin>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="dishSearch"
          >
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
        <Footer className="footer"></Footer>
      </div>}
    </Container>
  )
}