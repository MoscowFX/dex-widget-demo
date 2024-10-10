import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';  // Add this line if it's not already present

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)