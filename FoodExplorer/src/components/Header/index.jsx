import { Button } from './styles'
import { Logout } from './styles'
import { Container } from './styles'
import { LoganAdmin } from './styles'
import { RxExit } from 'react-icons/rx' 
//import { IoSearchOutline } from 'react-icons/io' 

import {ReactComponent as ImageAdmin} from '../../../assets/loganAdmin.svg'

export function Header({ title, loading = false, ...rest}){
  return(
    <Container>
      <ImageAdmin></ImageAdmin>       
        
      <Button
        type='button'
        disabled={loading}
        {...rest}
      >{loading ? 'Carregando...' : title}</Button>

      <Logout>
        <RxExit/>
      </Logout>
    
    </Container>
  )
}