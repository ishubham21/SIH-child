import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import style from "./App.module.css";
import Nav from "../../components/Nav/Nav";
import Login from "../Login/Login";
import Login1 from "../Login/Login1";
import Home from "../Home/Home";
import Coins from "../Coins/Coins";
import Games from "../Games/Games";
import GameIframe from "../Games/GameIframe";
import Cognitive from "../Cognitive/Cognitive";
import Calendar from "../../components/Calendar/Calendar";
import Psychomotor from "../Psychomotor/Psychomotor";
import YogaAI from "../YogaAI/YogaAI";
import Stories from "../Stories/Stories"
import Draw from "../Draw/Draw"

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
        <Route path="/games" element={<Games />} />
          <Route path="/games/2048" element={<GameIframe link={"https://www.gamezop.com/g/NyM_JGWcx?id=zv1Y2I8P"} />} />
          <Route path="/games/SpellWizard" element={<GameIframe link={"https://www.gamezop.com/g/zMxz8LNrp?id=zv1Y2I8P"} />} />
          <Route path="/games/DunkShot" element={<GameIframe link={"https://www.gamezop.com/g/S1Ne12TQqCH?id=zv1Y2I8P"} />} />
          <Route path="/games/SlitSight" element={<GameIframe link={"https://www.gamezop.com/g/S1Ne12TQqCH?id=zv1Y2I8P"} />} />
          <Route path="/games/WordFinder" element={<GameIframe link={"https://www.gamezop.com/g/r1K-J3TQ5Ar?id=zv1Y2I8P"} />} />
          <Route path="/games/TicTacToe" element={<GameIframe link={"https://www.gamezop.com/g/H1WmafkP9JQ?id=zv1Y2I8P"} />} />
        <Route path="/cognitive" element={<Cognitive />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/psychomotor" element={<Psychomotor />} />
        <Route path="/yoga/:asana" element={<YogaAI />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/draw" element={<Draw />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
