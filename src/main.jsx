import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyContextProvider, { MyContext } from './mycontext/MyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContextProvider>
    <App />
    </MyContextProvider>
  </React.StrictMode>,
)