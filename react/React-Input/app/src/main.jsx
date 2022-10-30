import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

import App from './App'
import Home from "./pages/Home";
import Places from "./pages/Places"
import Place from "./pages/Place"
import AddPlace from "./pages/AddPlace"
import NotFound from "./pages/NotFound"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
          <Route path='/places' element={<Places />} />
          <Route path='/places/:id' element={<Place />} />
          <Route path='/addPlace' element={<AddPlace />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
