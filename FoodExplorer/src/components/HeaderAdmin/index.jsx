import { RxExit } from 'react-icons/rx' 
import { Link } from 'react-router-dom'

import { InputHeader } from '../InputHeader'
import { Button, Logout, Container } from './styles'

import {ReactComponent as ImageAdmin} from '../../../assets/loganAdmin.svg'
import {ReactComponent as Search} from '../../../assets/search.svg'

export function HeaderAdmin({ icon: Icon, title, loading = false, ...rest}){
  return(
    <Container>
      <Link to="/homeAdmin">
        <ImageAdmin></ImageAdmin>
      </Link>
      <InputHeader placeholder="Busque por pratos ou ingredientes" icon={Search}></InputHeader>
      <Link to="/new">
        <Button
          type='button'
          disabled={loading}
          {...rest}
        >{loading ? 'Carregando...' : title}</Button>
      </Link>  

      <Logout>
        <RxExit/>
      </Logout>
    
    </Container>
  )
}