import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { Routes } from './routes'

import GlobalStyles from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />        
        <Routes />
    </ThemeProvider>
  </React.StrictMode>
)

// comando "npm install react-router-dom" para instalar biblioteca do react de rotas entre paginas 