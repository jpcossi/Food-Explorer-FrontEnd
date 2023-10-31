import { useEffect, useState } from "react"
import { Container } from "./styles";

import { api } from "../../services/api.js"

export function Tags({data, ...rest}){
  const [tags, setTags] = useState([])
  
  useEffect(() => {
    async function fecthTags(){
      if(data.id !== undefined){
        const response = await api.get(`/dishes/${data.id}`)
        setTags(response.data.ingredients)
      }
    }
    fecthTags()
  }, []);

  return(
    <Container {...rest}>
      {
        tags.map((tag, index) => (
          <div className="tag" key={String(index)}>
            <p>{tag.name}</p>
          </div>
        ))
      }
    </Container>
  )
}