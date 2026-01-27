import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootDiv = document.getElementById('root') as HTMLElement

createRoot(rootDiv).render(
  <App />
)
