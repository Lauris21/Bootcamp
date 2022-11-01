import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App'
import './index.css'

import Home from "./pages/Home"
import Form from "./pages/Form"
import Finder from "./pages/Finder"
import Details from "./pages/Details"
import Comments from './pages/Comments'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<App />} >
        <Route index element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/finder' element={<Finder />} />
        <Route path='/finder/:id' element={<Details />} />
        <Route path='/comments' element={<Comments />} />
      </Route>
    </Routes>
  </BrowserRouter>
  
  </React.StrictMode>
)
