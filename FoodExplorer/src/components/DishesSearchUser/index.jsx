import { Container } from "./styles.js"
import { Link } from "react-router-dom"
import { Tags } from "../../components/Tags"

import { api } from "../../services/api.js"

export function DishesSearchUser({data, ...rest}){
  const ImageUrl = `${api.defaults.baseURL}/files/${data.image}`

  return(
    <Container {...rest}>
      <div className="main">
        <div className="left">
          <img src={ImageUrl}></img>
        </div>
        <div className="right">
          <Link className="link" to={`/dish/${data.id}`}>
            <h1>{data.name}</h1>
          </Link>
          <Tags data={data}></Tags>
        </div>
      </div>
    </Container>
  )
}