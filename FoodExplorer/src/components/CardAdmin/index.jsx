import { Container } from "./style";
import { Link } from "react-router-dom"
import { api } from "../../services/api.js"

import {ReactComponent as Edit} from '../../../assets/edit.svg'

export function CardAdmin({data, ...rest}){
  const ImageUrl = `${api.defaults.baseURL}/files/${data.image}`

  return(
    <Container {...rest}>
      <div className="edit">
        <Link to={`/edit/${data.id}`}>
          <Edit></Edit>
        </Link>
      </div>
      <div className="link">
        <img className="image" src={ImageUrl} alt="" draggable="false"/>
        <Link className="link" to={`/dishAdmin/${data.id}`}>
          <h2>{data.name}</h2>
        </Link>
        <p>{data.description}</p>
        <h3>R$ {data.price/100}</h3>
      </div>
    </Container>
  )
}