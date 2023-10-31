import { RxExit } from 'react-icons/rx' 
import { Link } from 'react-router-dom'

import { useAuth} from "../../hooks/auth"
import { InputHeader } from '../InputHeader'
import { Button, Logout, Container } from './styles'

import {ReactComponent as ImageAdmin} from '../../../assets/loganAdmin.svg'
import {ReactComponent as Menu} from '../../../assets/menu.svg'
import {ReactComponent as Close} from '../../../assets/close.svg'

export function HeaderAdmin({icon: Icon, children, title, loading = false, ...rest}){
  const { signOut } = useAuth()
  
  const main = document.querySelector(".main")
  const menu = document.querySelector(".menu")
  const close = document.querySelector(".close")
  const logOut = document.querySelector(".logOut")
  const input = document.querySelector(".inputHeader")  
  const imageAdmin = document.querySelector(".imageAdmin")
  const closeMenu = document.querySelector(".closeMenu")
  const newDish = document.querySelector(".newDish")


  if(menu){
    menu.addEventListener("click", () => {
      main.classList.add("menuSearch")
      menu.classList.add("hidden")
      imageAdmin.classList.add("hidden")

      closeMenu.classList.remove("hidden")
      input.classList.remove("hidden")
      newDish.classList.remove("hidden")
      logOut.classList.remove("hidden")
    })
  
    close.addEventListener("click", () => {
      main.classList.remove("menuSearch")
      menu.classList.remove("hidden")
      imageAdmin.classList.remove("hidden")

      closeMenu.classList.add("hidden")
      input.classList.add("hidden")
      logOut.classList.add("hidden")         
      newDish.classList.add("hidden")
    })
  }

  return(
    <Container>
      <div className='main'>
        <section className='section1'>
          <div className='closeMenu hidden'>  
            <Close className='close'></Close>
            <h2>Menu</h2>
          </div>
          <div className='menu'>
              <Menu></Menu>
          </div>
          <div className='imageAdmin'>
            <Link to="/">
              <ImageAdmin></ImageAdmin>
            </Link>
          </div>
        </section> 
        <section className='section2'>
          {Icon && <Icon />}
          <InputHeader>
            {children}    
          </InputHeader>      
          <Link to="/new">
            <Button
              type='button'
              disabled={loading}
              {...rest}
            >
              {loading ? 'Carregando...' : title}
            </Button>
          </Link>
          <Link to="/">
            <Logout onClick={signOut}>
              <RxExit/>
            </Logout>
          </Link>  
          <div className='newDish hidden'>
            <Link to="/new">
              <button>Novo Prato</button>
            </Link> 
          </div>
          <div className='logOut hidden'>
            <button onClick={signOut}>Sair</button>
          </div>
        </section>
      </div>      
    </Container>
  )
}