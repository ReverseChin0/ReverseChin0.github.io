import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './PortfolioApp.css'
import { PortfolioApp } from './PortfolioApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
        <PortfolioApp />
     </BrowserRouter>
  </React.StrictMode>
)
