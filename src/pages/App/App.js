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
        <Route path="/login" element={<Login />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/cognitive" element={<Cognitive />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
