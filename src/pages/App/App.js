import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import style from "./App.module.css";
import Nav from "../../components/Nav/Nav";
import Login from "../Login/Login";
import Login1 from "../Login/Login1";
import Home from "../Home/Home";
import Coins from "../Coins/Coins";
import Games from "../Games/Games";
import Game2048 from "../Games/GameIframe";
import Cognitive from "../Cognitive/Cognitive";
import Calendar from "../../components/Calendar/Calendar";
import Psychomotor from "../Psychomotor/Psychomotor";

const App = () => {
  const gameList = [
    {
      "name": "2048",
      "url": "2048",
      "link": "https://www.gamezop.com/g/NyM_JGWcx?id=zv1Y2I8P",
      "image": "2048.png"
    },
    {
      "name": "Spell Wizard",
      "url": "SpellWizard",
      "link": "https://www.gamezop.com/g/zMxz8LNrp?id=zv1Y2I8P",
      "image": "SpellWizard.png"
    }
  ]
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/games" element={<Games gameList={gameList} />} />
          <Route path="/games/2048" element={<Game2048 link={"https://www.gamezop.com/g/NyM_JGWcx?id=zv1Y2I8P"} />} />
          <Route path="/games/SpellWizard" element={<Game2048 link={"https://www.gamezop.com/g/zMxz8LNrp?id=zv1Y2I8P"} />} />
        <Route path="/cognitive" element={<Cognitive />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/psychomotor" element={<Psychomotor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
