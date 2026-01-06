import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalStore } from './store/global/globalProvider.jsx'
import {BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
      <BrowserRouter>
        <GlobalStore>
           <App />
        </GlobalStore>
      </BrowserRouter>
  )