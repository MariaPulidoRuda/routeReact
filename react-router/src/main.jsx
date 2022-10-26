import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'


//Import pages
import Home from '../pages/Home'
import About from '../pages/About'
import Pose from '../pages/Pose'
import Poses from '../pages/Poses'

//definir en el BrowserRouter todas las rutas
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="poses" element={<Poses />} />
          <Route path='/pose/:id' element={<Pose />} /> 
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={
              <main>
                <p>404 - NOT FOUND!</p> 
              </main>
            }
            //lo ideal es hacer una página con 404 NOT FOUND
          ></Route>
        </Route> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
) 
