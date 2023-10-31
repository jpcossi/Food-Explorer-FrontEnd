import { motion } from 'framer-motion'
import { useEffect, useState } from "react"
import { Link , useParams} from 'react-router-dom'

import { api } from "../../services/api.js"

import { Container } from './styles.js'

import { Footer } from '../../components/Footer'
import { ButtonDish } from '../../components/ButtonDish'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { ButtonTextBack } from '../../components/ButtonTextBack'
import { DishesSearch } from "../../components/DishesSearch/index.jsx"

export function ShowDishAdmin(){
  let link = document.querySelectorAll(".search .dishSearch .dish .link") 
  let input = document.querySelector(".input")

  const hero = document.querySelector(".hero")
  let close = document.querySelector(".close")
  let newDish = document.querySelector(".newDish")
  let menu = document.querySelector(".main .menu")
  let input2 = document.querySelector(".inputHeader #input2")

  const [dish, setDish] = useState([])
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState("")
  const [ingredients, setIngredients] = useState([])
  
  const ImageUrl = `${api.defaults.baseURL}/files/${dish.image}`
  
  const params = useParams()

  link.forEach(h1 => {
    h1.addEventListener("click", () => {
      input.value = ""      
      window.location.assign(h1.href)
    })
  })

  if(menu){
    menu.addEventListener("click", () => {
      if(hero != null){
        hero.classList.add("hide") 
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
    if(hero){
      let e = menu.classList.contains("hidden")
      if(search === "" && e == true){        
        hero.classList.add("hide")
      }  
    }

    close.addEventListener("click", () => {
      if(hero != null){
        hero.classList.remove("hide")
      }
    })
  }

  useEffect(() => {
    async function fetchDish(){
      const response = await api.get(`/dishes/${params.id}`);
      setDish(response.data)
      setIngredients(response.data.ingredients)
    }
    fetchDish()
  }, [])

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
              onChange={(e) => setSearch(e.target.value)}/>
          </HeaderAdmin>
          <main className='hero'>
            <Link to="/">
              <ButtonTextBack title="voltar"></ButtonTextBack>
            </Link>
            <div className='hero'> 
              <section className='left'>
                <img className="image" src={ImageUrl} alt="" />
              </section>
              <section className='right'>
                  <h1>{dish.name}</h1>
                  <p>{dish.description}</p>
                  <div className="tags">
                    {
                      ingredients.map((tag, index) => (
                        <div className="tag" key={String(index)}>
                          <p>{tag.name}</p>
                        </div>
                      ))
                    }
                  </div>
                  <Link to={`/edit/${dish.id}`}>
                    <ButtonDish className="button" title="Editar Prato"></ButtonDish>
                  </Link>
              </section>
            </div>
          </main>
        </div>
        <Footer></Footer>        
      </div> :
      <div className="search">
        <div className='body-content'>
          <HeaderAdmin title='Novo Prato'>
            <input 
              className="input"
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
        <Footer className="footer"></Footer>
      </div>  
      }
    </Container>
  )
}