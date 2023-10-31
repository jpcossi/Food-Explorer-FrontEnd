import { motion } from 'framer-motion'
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

import { api } from "../../services/api.js"

import { Container } from "./styles";
import { Footer } from "../../components/Footer";
import { HeaderUser } from '../../components/HeaderUser'
import { ButtonDish } from "../../components/ButtonDish";

import { ButtonTextBack } from "../../components/ButtonTextBack";
import { DishesSearchUser } from '../../components/DishesSearchUser';

import { FiPlus } from 'react-icons/fi' 
import { FiMinus } from 'react-icons/fi'  
import { TfiReceipt } from 'react-icons/tfi'

export function ShowDishUser(){
  let input2 = document.querySelector(".inputHeader #input2")
  let close = document.querySelector(".main .closeMenu .close")
  let link = document.querySelectorAll(".search .dishSearch .dish .link") 
  let input = document.querySelector(".input")

  const [dish, setDish] = useState([])
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState("")
  const [ingredients, setIngredients] = useState([])

  link.forEach(h1 => {
    h1.addEventListener("click", () => {
      input.value = ""      
      window.location.assign(h1.href)
    })
  })

  if(input2){
    close.addEventListener("click", () => {
      setSearch("")
      input2.value = ""
    })
  }

  const ImageUrl = `${api.defaults.baseURL}/files/${dish.image}`
  
  const params = useParams()

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

  return (
    <Container>
      {search === "" ?
      <div className='first'>
        <div className='body-content'>
          <HeaderUser icon={TfiReceipt} title="Pedidos (0)">
            <input 
              type="text"
              placeholder="Busque por pratos ou ingredientes" 
              onChange={(e) => setSearch(e.target.value)}
            />
          </HeaderUser>
          <main>
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
                <div className="divCount">
                  <div className="Count">
                    <ButtonDish icon={FiMinus} className="buttonMinus"/>
                    <h4>01</h4>
                    <ButtonDish icon={FiPlus} className="buttonPlus"/>
                  </div>
                  <ButtonDish title="Incluir - R$ 25,00"/>
                </div>
              </section>
            </div>
          </main>
        </div>
        <Footer />
      </div> : 
      <div className="search">
        <div className='body-content'>
          <HeaderUser icon={TfiReceipt} title="Pedidos (0)">
            <input 
              className="input"
              type="text"
              placeholder="Busque por pratos ou ingredientes" 
              onChange={(e) => setSearch(e.target.value)}
              id='input2'
            />
          </HeaderUser>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="dishSearch">
              <h1>Pesquisas Releacionadas a "{search}"</h1>            
              {
                dishes.map(dish => (
                  <motion.div key={String(dish.id)}     >
                    <DishesSearchUser className="dish"        
                      data={dish}>
                    </DishesSearchUser>
                  </motion.div>
                ))
              }
          </motion.div>
        </div>
        <Footer></Footer>
      </div>
      }
    </Container>
  )
}