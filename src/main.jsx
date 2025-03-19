import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import { ContextProvider } from './contexts/ContextProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  < StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>

  </StrictMode>,
)
