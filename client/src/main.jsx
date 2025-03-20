import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {BrowserRouter} from 'react-router-dom';    //for routing..
import 'bootstrap/dist/css/bootstrap.min.css';    //after installing npm i bootstarp;
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // For JavaScript


createRoot(document.getElementById('root')).render(
  //copy content
  <StrictMode>                            
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)


