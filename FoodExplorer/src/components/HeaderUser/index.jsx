import { Link } from 'react-router-dom'
import { RxExit } from 'react-icons/rx' 

import { useAuth} from "../../hooks/auth"
import { InputHeader } from '../InputHeader'
import { Button, Logout, Container } from './styles'

import {ReactComponent as ImageUser} from '../../../assets/loganUser.svg'
import {ReactComponent as Menu} from '../../../assets/menu.svg'
import {ReactComponent as Close} from '../../../assets/close.svg'

export function HeaderUser({ icon: Icon, children, title, loading = false, ...rest}){
  const { signOut } = useAuth()

  const menu = document.querySelector(".menu")
  const close = document.querySelector(".close")
  const logOut = document.querySelector(".logOut")
  const input = document.querySelector(".inputHeader")  
  const imageUser = document.querySelector(".imageUser")
  const closeMenu = document.querySelector(".closeMenu")
  const buttonMobile = document.querySelector(".buttonMobile")


  if(menu){
    menu.addEventListener("click", () => {
      menu.classList.add("hidden")
      imageUser.classList.add("hidden")
      buttonMobile.classList.add("hidden")
      closeMenu.classList.remove("hidden")
      input.classList.remove("hidden")
      logOut.classList.remove("hidden")
    })
  
    close.addEventListener("click", () => {
      menu.classList.remove("hidden")
      imageUser.classList.remove("hidden")
      buttonMobile.classList.remove("hidden")
      closeMenu.classList.add("hidden")
      input.classList.add("hidden")
      logOut.classList.add("hidden")         
    })
  }

  //joao@gmail.com

  return(
    <Container>
      <div className='main'>      
        <div className='closeMenu hidden'>  
          <Close className='close'></Close>
          <h2>Menu</h2>
        </div>
        <div className='menu'>
          <Menu></Menu>
        </div>
        <div className='imageUser'>
          <Link to="/">
              <ImageUser></ImageUser>
          </Link>
        </div>
        <InputHeader>
          {children}
        </InputHeader>
        <Button
          type='button'
          disabled={loading}
          className='button'
          {...rest}
        > 
          <Icon/>
          {loading ? 'Carregando...' : title}
        </Button>
        <Button type='button' className='buttonMobile'>
          <Icon></Icon>
        </Button>
        <Link to="/">
          <Logout onClick={signOut}>
            <RxExit/>
          </Logout>
        </Link> 
        <div className="break"></div>
        <div className='logOut hidden'>
          <button onClick={signOut}>Sair</button>
        </div>
      </div>
    </Container>
  )
}