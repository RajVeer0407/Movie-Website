import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GenresProvider } from './contex/genres.context.tsx'
import { SearchProvider } from './contex/searchResult.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <GenresProvider>
          <App />
        </GenresProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
