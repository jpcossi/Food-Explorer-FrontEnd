import {Routes, Route } from 'react-router-dom'

import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'
import { DetailsUser } from '../pages/DetailsUser'
import { ShowDishUser } from '../pages/ShowDishUser'
import { DetailsAdmin } from '../pages/DetailsAdmin'
import { ShowDishAdmin } from '../pages/ShowDishAdmin'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/new' element={<NewDish />} />
      <Route path='/edit' element={<EditDish />} />
      <Route path='/home' element={<DetailsUser />} />
      <Route path='/homeAdmin' element={<DetailsAdmin />} />
      <Route path='/dish' element={<ShowDishUser />} />
      <Route path='/dishAdmin' element={<ShowDishAdmin />} />
    </Routes>
  )
}