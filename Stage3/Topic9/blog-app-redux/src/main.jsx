import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalStore } from './store/global/globalProvider.jsx'
import {BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store';


createRoot(document.getElementById('root')).render(
      <BrowserRouter>
        <Provider store={store} >
          <GlobalStore>
            <App />
          </GlobalStore>
        </Provider>
      </BrowserRouter>
  )