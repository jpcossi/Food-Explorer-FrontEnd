import { RxExit } from 'react-icons/rx' 

import { InputHeader } from '../InputHeader'
import { Button, Logout, Container } from './styles'

import {ReactComponent as ImageAdmin} from '../../../assets/loganAdmin.svg'
import {ReactComponent as Search} from '../../../assets/search.svg'

export function HeaderAdmin({ icon: Icon, title, loading = false, ...rest}){
  return(
    <Container>
      <ImageAdmin></ImageAdmin>
      <InputHeader placeholder="Busque por pratos ou ingredientes" icon={Search}></InputHeader>
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