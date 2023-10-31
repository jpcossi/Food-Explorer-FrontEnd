import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from "react"

import { Container } from "./styles.js"

import { api } from "../../services/api.js"
import { Footer } from "../../components/Footer/index.jsx"
import { Section } from "../../components/Section/index.jsx"
import { CardAdmin } from "../../components/CardAdmin/index.jsx"
import { HeaderAdmin } from "../../components/HeaderAdmin/index.jsx"
import { WelcomeDiv } from "../../components/WelcomeDiv/index.jsx"
import { DishesSearch } from "../../components/DishesSearch/index.jsx"

import {ReactComponent as Arrow} from '../../../assets/arrowLeft.svg'

export function DetailsAdmin() {
  const ref= useRef()
  const ref2= useRef()
  const ref3= useRef()
    
  const [dishes, setDishes ] = useState([])   
  const [dishesRefeicoes, setDishesRefeicoes ] = useState([])   
  const [dishesSobremesas, setDishesSobremesas ] = useState([])   
  const [dishesBebidas, setDishesBebidas ] = useState([])
  
  const [search, setSearch] = useState("") 
  
  const carousel = document.querySelector(".carousel")
  const carousel2 = document.querySelector(".carousel2")
  const carousel3 = document.querySelector(".carousel3")  
  const hero = document.querySelector(".first .body-content .hero")
  let close = document.querySelector(".close")
  let newDish = document.querySelector(".newDish")
  let menu = document.querySelector(".main .menu")
  let input2 = document.querySelector(".inputHeader #input2")

  const arrowBtns = document.querySelectorAll(".App .arrow")
  const arrowBtns2 = document.querySelectorAll(".App2 .arrow")
  const arrowBtns3 = document.querySelectorAll(".App3 .arrow")
  
  let isDragging = false, isDragging2 = false, isDragging3 = false
  let startX, startX2, startX3
  let startScrollLeft, startScrollLeft2, startScrollLeft3

  if(carousel){        
    arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -ref.current?.offsetWidth : ref.current?.offsetWidth
      })
    })
    arrowBtns2.forEach(btn => {
      btn.addEventListener("click", () => {
        carousel2.scrollLeft += btn.id === "left2" ? -ref2.current?.offsetWidth : ref2.current?.offsetWidth
      })
    })
    arrowBtns3.forEach(btn => {
      btn.addEventListener("click", () => {
        carousel3.scrollLeft += btn.id === "left3" ? -ref3.current?.offsetWidth : ref3.current?.offsetWidth
      })
    })

    const dragStart = (e) => {
      isDragging = true
      carousel.classList.add("dragging")
      startX = e.pageX
      startScrollLeft = carousel.scrollLeft
    }
    const dragStart2 = (e) => {
      isDragging2 = true
      carousel2.classList.add("dragging")
      startX2 = e.pageX
      startScrollLeft2 = carousel2.scrollLeft
    }
    const dragStart3 = (e) => {
      isDragging3 = true
      carousel3.classList.add("dragging")
      startX3 = e.pageX
      startScrollLeft3 = carousel3.scrollLeft
    }
    
    const dragging = (e) => {
      if(isDragging == true){
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
      }else{
        if(isDragging2 == true){
          carousel2.scrollLeft = startScrollLeft2 - (e.pageX - startX2)
        }else{
          if(isDragging3 == true){
            carousel3.scrollLeft = startScrollLeft3 - (e.pageX - startX3)
          }
        }
      }         
    }

    const dragStop = () => {
      isDragging = false
      isDragging2 = false
      isDragging3 = false
      carousel.classList.remove("dragging")
      carousel2.classList.remove("dragging")
      carousel3.classList.remove("dragging")
    }

    carousel.addEventListener("mousedown", dragStart)
    carousel2.addEventListener("mousedown", dragStart2)
    carousel3.addEventListener("mousedown", dragStart3)

    carousel.addEventListener("mousemove", dragging)
    carousel2.addEventListener("mousemove", dragging)
    carousel3.addEventListener("mousemove", dragging)    
    document.addEventListener("mouseup", dragStop)

  }

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
    async function fetchDishes() {
      const response = await api.get(`/dishes?name=${search}&ingredients=${search}`);
      setDishes(response.data[3].dishByName)
      setDishesBebidas(response.data[0])
      setDishesRefeicoes(response.data[1])
      setDishesSobremesas(response.data[2])
    }
    fetchDishes();
  }, [search]);
  
  return(
    <Container>
      {search === "" ? 
      <div className='first'>
        <div className='body-content'>
          <HeaderAdmin title='Novo Prato'>
            <input 
              type="text"
              placeholder="Busque por pratos ou ingredientes" 
              onChange={(e) => setSearch(e.target.value)}
            />
          </HeaderAdmin> 
          <div className='hero'>
            <main >
              <WelcomeDiv></WelcomeDiv>
              <Section title="Refeições">
                <div className="App">
                  <Arrow id="left" className="arrowLeft arrow"></Arrow>
                  <motion.div className="carousel">         
                    {              
                      dishesRefeicoes.map(dish => (
                      <div className="card" ref={ref} key={String(dish.id)}>
                        <CardAdmin
                          draggable="false"              
                          data={dish}>
                        </CardAdmin>
                      </div>  
                      ))
                    } 
                  </motion.div>
                  <Arrow id="right" className="arrowRight arrow"></Arrow>
                </div>        
              </Section>
              <Section title="Sobremesas">
                <div className="App2">
                  <Arrow id="left2" className="arrowLeft arrow"></Arrow>
                  <motion.div className="carousel2">         
                    {              
                      dishesSobremesas.map(dish => (
                        <div className="card" ref={ref2} key={String(dish.id)}>
                          <CardAdmin
                            draggable="false"              
                            data={dish}>
                          </CardAdmin>
                        </div>  
                      ))
                    } 
                  </motion.div>
                  <Arrow id="right2" className="arrowRight arrow"></Arrow>
                </div> 
              </Section>
              <Section title="Bebidas">
                <div className="App3">
                  <Arrow id="left3" className="arrowLeft arrow"></Arrow>
                  <motion.div className="carousel3">         
                    {              
                      dishesBebidas.map(dish => (
                      <div className="card" ref={ref3} key={String(dish.id)}>
                          <CardAdmin
                            draggable="false"              
                            data={dish}>
                          </CardAdmin>
                        </div>  
                      ))
                    } 
                  </motion.div>
                  <Arrow id="right3" className="arrowRight arrow"></Arrow>
                </div> 
              </Section>
            </main>  
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
            initial={{ y: 200 }}
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
      </div>
      }
    </Container>
  )
}
