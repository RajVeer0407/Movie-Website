import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GenresProvider } from './contex/genres.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <GenresProvider>
    <App />
    </GenresProvider>
    
    </BrowserRouter>
  </React.StrictMode>,
)
