import { Container } from './styles'
import { Link } from "react-router-dom"
import { api } from "../../services/api.js"

import { ButtonDish } from "../../components/ButtonDish"

import { FiPlus } from 'react-icons/fi' 
import { FiMinus } from 'react-icons/fi'

export function CardUser({data, ...rest}){
  const ImageUrl = `${api.defaults.baseURL}/files/${data.image}`
  
  return(
    <Container {...rest}>
      <div className='card'>
        <img className="image" src={ImageUrl} alt="" draggable="false"/>
        <Link to={`/dish/${data.id}`}>
          <h2>{data.name}</h2>
        </Link>
        <p>{data.description}</p>
        <h3>R$ {data.price/100}</h3>
        <div className='lastChild'>
          <div className="divCount">
            <ButtonDish icon={FiMinus} className="buttonMinus"/>
              <h4>01</h4>
            <ButtonDish icon={FiPlus} className="buttonPlus"/>
          </div>
          <button className='button'>Incluir</button>
        </div>
      </div>
    </Container>
  )
}