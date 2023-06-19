import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { NewDish } from './pages/NewDish'
import { ShowDishAdmin } from './pages/ShowDishAdmin'
import { ShowDishUser } from './pages/ShowDishUser'
import { EditDish } from './pages/EditDish'
import { DetailsUser} from './pages/DetailsUser'
import { ThemeProvider } from 'styled-components'
import { DetailsAdmin } from './pages/DetailsAdmin'

import GlobalStyles from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />        
        <ShowDishUser />
    </ThemeProvider>
  </React.StrictMode>
)
