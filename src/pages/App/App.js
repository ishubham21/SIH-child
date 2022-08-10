import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import style from "./App.module.css";
import Nav from "../../components/Nav/Nav";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Coins from "../Coins/Coins";
import Cognitive from "../Cognitive/Cognitive";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/coins" element={<Coins />} />
      </Routes>
      <Routes>
        <Route path="/cognitive" element={<Cognitive />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
