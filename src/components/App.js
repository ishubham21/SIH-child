import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import style from "./App.module.css"
import Nav from "./Nav/Nav"
import Home from "./Home/Home"
import Coins from "./Coins/Coins"

const App = () => {
  
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/coins" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
