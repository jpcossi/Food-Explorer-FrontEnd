import { Link } from 'react-router-dom'
import { RxExit } from 'react-icons/rx' 

import { InputHeader } from '../InputHeader'
import { Button, Logout, Container } from './styles'

import {ReactComponent as ImageUser} from '../../../assets/loganUser.svg'
import {ReactComponent as Search} from '../../../assets/search.svg'

export function HeaderUser({ icon: Icon, title, loading = false, ...rest}){
  return(
    <Container>
      <Link to="/home">
        <ImageUser></ImageUser>
      </Link>
      <InputHeader placeholder="Busque por pratos ou ingredientes" icon={Search}></InputHeader>
      <Button
        type='button'
        disabled={loading}
        {...rest}
      >
        <Icon/>
        {loading ? 'Carregando...' : title}</Button>

      <Logout to="/home">
        <RxExit/>
      </Logout>
    
    </Container>
  )
}