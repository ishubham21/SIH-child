import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
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

import { ChildProvider } from "../../context/childContext";

const NavLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

const PrivateRoutes = ({ token }) => {
  if (token) {
    return (
      <Outlet />
    )
  } else {
    return <Navigate to="/login" />;
  }
  
}

const App = () => {
  localStorage.setItem('token', '6433c8d5-5c67-4880-b888-65bc1a5d37a4')
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [data, setData] = useState(null)
  console.log(token, data)

  // useEffect(() => {
  //   fetch(`${config.baseUrl}/${config.dataUrl}/${token}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       data.error ? console.log(data.error) : setData(data.data)
  //     })
  // }, [])

  return (
    <ChildProvider>
      <BrowserRouter>
        <Routes>
          {/* Routes when logged out */}
          <Route path="login" element={<Login />} />
          {/* Routes when logged in */}
          <Route element={<PrivateRoutes token={token} />}>
            {/* Routes without Nav */}
            <Route path="/" element={<Dashboard />} />
            <Route path="games/:game" element={<GameIframe />} />
            {/* Routes with Nav */}
            <Route element={<NavLayout />}>
              <Route path="child" element={<Home />} />
              <Route path="games" element={<Games />} />
              <Route path="coins" element={<Coins />} />
              <Route path="cognitive/:cognitiveTaskId" element={<Cognitive />} />
              <Route path="psychomotor" element={<Psychomotor />} />
              <Route path="yoga/:yogaId" element={<YogaAI />} />
              <Route path="stories" element={<Stories />} />
              <Route path="draw" element={<Draw />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ChildProvider>
  );
};

export default App;
