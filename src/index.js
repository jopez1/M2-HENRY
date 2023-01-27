import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import store from "./redux/store"
import { Provider } from 'react-redux'



/* const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  
  <React.StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </React.StrictMode>
  ,document.getElementById('root')
) */

 ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
     <App />
     </BrowserRouter>
  </Provider>,
  document.getElementById('root')
); 