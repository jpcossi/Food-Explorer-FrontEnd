import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from "react"

import { api } from "../../services/api.js"

import { Container } from "./styles";
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { HeaderUser } from "../../components/HeaderUser";
import { WelcomeDiv } from "../../components/WelcomeDiv"
import { DishesSearchUser } from "../../components/DishesSearchUser"
import { CardUser } from '../../components/CardUser/index.jsx';

import { TfiReceipt } from 'react-icons/tfi' 

import {ReactComponent as Arrow} from '../../../assets/arrowLeft.svg'

export function DetailsUser(){
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
  let close = document.querySelector(".main .closeMenu .close")
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
  if(input2){
    close.addEventListener("click", () => {
      setSearch("")
      input2.value = ""
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
      {(search === "") ?
      <div className='first'>
        <div className='body-content'>
          <HeaderUser icon={TfiReceipt} title="Pedidos (0)">
            <input 
              type="text"
              placeholder="Busque por pratos ou ingredientes" 
              onChange={(e) => setSearch(e.target.value)}
              id='input1'
            />
          </HeaderUser>
          <main>
            <WelcomeDiv />
            <Section title="Refeições">
              <div className="App">
                <Arrow id="left" className="arrowLeft arrow"></Arrow>
                <motion.div className="carousel">         
                  {              
                    dishesRefeicoes.map(dish => (
                    <div className="card" ref={ref} key={String(dish.id)}>
                      <CardUser
                        draggable="false"              
                        data={dish}>
                      </CardUser>
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
                        <CardUser
                          draggable="false"              
                          data={dish}>
                        </CardUser>
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
                        <CardUser
                          draggable="false"              
                          data={dish}>
                        </CardUser>
                      </div>  
                    ))
                  } 
                </motion.div>
                <Arrow id="right3" className="arrowRight arrow"></Arrow>
              </div>
            </Section>  
          </main>
        </div>
        <Footer />
      </div> :
      <div className="search">
        <div className='body-content'>
          <HeaderUser icon={TfiReceipt} title="Pedidos (0)">
            <input 
              type="text"
              placeholder="Busque por pratos ou ingredientes" 
              onChange={(e) => setSearch(e.target.value)}
              id="input2"
            />
          </HeaderUser>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="dishSearch"
          >
            <h1>Pesquisas Relacionadas a "{search}"</h1>            
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
      </div>}
    </Container>    
  )
}