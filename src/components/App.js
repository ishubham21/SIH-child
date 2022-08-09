import { BrowserRouter, Routes, Route } from 'react-router-dom'

import style from "./App.module.css"
import Nav from "./Nav/Nav"
import Home from "./Home/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
