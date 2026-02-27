import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/reset.css'
import './styles/tokens.css'
import './styles/theme.css'
import './styles/theme.css'
import './styles/global.css'

import App from './App';
const rootElement = document.getElementById('root')!;
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
