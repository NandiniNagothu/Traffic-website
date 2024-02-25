import React from "react"
import { useState } from "react"
import Navbar from "./Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Section from "./Section"
import Contact from "./Contact"
import ImageSlider from "./ImageSlider"
import Demo from "./Demo"
import Trafficcheck from './Trafficcheck'
import NewsApp from "./NewsApp"
import Home from "./Home"

const App = () =>{

  

  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/demo" element={<Demo/>}/>
         <Route path='/traffic-checker' element={<Trafficcheck/>}></Route>
        <Route path='/news' element={<NewsApp/>}></Route>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    
        
  )
}

export default App;