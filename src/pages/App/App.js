import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
//import { useState } from "react";
import { useEffect, useState } from "react";

import config from "../../config";
// import style from "./App.module.css";
import Nav from "../../components/Nav/Nav";
import Login from "../Login/Login";
import Dashboard from "../Login/Dashboard";
import Home from "../Home/Home";
import Coins from "../Coins/Coins";
import Games from "../Games/Games";
import GameIframe from "../Games/GameIframe";
import Cognitive from "../Cognitive/Cognitive";
import Psychomotor from "../Psychomotor/Psychomotor";
import YogaAI from "../YogaAI/YogaAI";
import Stories from "../Stories/Stories";
import Draw from "../Draw/Draw";

const NavLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

const PrivateRoutes = ({ childToken }) => {
  if (childToken) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

const App = () => {
  localStorage.setItem(
    "childToken",
    "2b9d4ffc-71d9-4f57-9b4c-9a3c2be6eb2c",
  );
  const [childToken, setToken] = useState(
    localStorage.getItem("childToken"),
  );
  const [data, setData] = useState(null);
  console.log(childToken, data);

  useEffect(() => {
    fetch(`${config.baseUrl}/${config.dataUrl}/${childToken}`)
      .then((response) => response.json())
      .then((data) => {
        data.error ? console.log(data.error) : setData(data.data);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes when logged in */}
        <Route element={<PrivateRoutes childToken={childToken} />}>
          <Route element={<NavLayout />}>
            {/* Routes with Nav */}
            <Route path="/" element={<Home />} />
            <Route path="games" element={<Games />} />
            <Route path="coins" element={<Coins />} />
            <Route path="cognitive" element={<Cognitive />} />
            <Route path="psychomotor" element={<Psychomotor />} />
            <Route path="yoga/:asana" element={<YogaAI />} />
            <Route path="stories" element={<Stories />} />
            <Route path="draw" element={<Draw />} />
          </Route>
          {/* Routes without Nav */}
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="games/:game" element={<GameIframe />} />
        </Route>
        {/* Routes when logged out */}
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
