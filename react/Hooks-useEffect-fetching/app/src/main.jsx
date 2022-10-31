import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from './App'
import './index.css'

import Home from "./pages/Home";
import Finder from "./pages/Finder";
import FormMovies from "./pages/FormMovie";
import MoviesGallery from "./pages/MoviesGallery";
import DetailMovie from "./pages/DetailMovie";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />} >
        <Route index element={<Home />} />
        <Route path='/finder' element={<Finder />} />
        <Route path='/formMovies' element={<FormMovies />} />
        <Route path='/moviesGallery' element={<MoviesGallery />} />
        <Route path='/moviesGallery/:id' element={<DetailMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
