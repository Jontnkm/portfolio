import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/css.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/jkProject">
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
