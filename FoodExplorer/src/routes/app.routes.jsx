import {Routes, Route } from 'react-router-dom'
import { useAuth } from "../hooks/auth"

import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'
import { DetailsUser } from '../pages/DetailsUser'
import { ShowDishUser } from '../pages/ShowDishUser'
import { DetailsAdmin } from '../pages/DetailsAdmin'
import { ShowDishAdmin } from '../pages/ShowDishAdmin'


export function AppRoutes(){
  const { user } = useAuth()
  return(
    <div>
      {user.isAdmin ? <Routes>
        <Route path='/' element={<DetailsAdmin />} />
        <Route path='/new' element={<NewDish />} />
        <Route path='/edit/:id' element={<EditDish />} />
        <Route path='/dishAdmin/:id' element={<ShowDishAdmin />} />
      </Routes> : <Routes>
        <Route path='/' element={<DetailsUser />} />
        <Route path='/dish/:id' element={<ShowDishUser />} />
      </Routes>
    } 
    </div>      
  )
}
