import { useContext, useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ChildContext from "../../context/childContext";

import config from "../../config"
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState(localStorage.getItem('token'))
  const { child, updateChild } = useContext(ChildContext)
  //const [data, setData] = useState({});

  const css = `
    body {
      background: linear-gradient(180deg, #FFFFFF 81.24%, #5D9CFB 81.25%);
    }
  `;

  useEffect(() => {
    fetch(`${config.baseUrl}/${config.dataUrl}/${localStorage.getItem('token')}`, {
      method: "GET",
    })
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          console.log(response.error)
        } else {
          updateChild(response.data)
          console.log(response.data)
        }
      })
  }, [])

  if (Object.keys(child).length === 0) {
    return (
      <Loader />
    )
  } else {
    return (
      <main className={style.main}>
        <style>{css}</style>
        <div className={style.title}>
          <img
            src={require("../../assets/images/planet.png")}
            alt="planet"
          />
          <h1>Hello {child.name}, good luck for the new day!</h1>
        </div>
        <div className={style.hero}>
          <div className={style.card}>
            <h2>Check today&apos;s </h2>
            <h2>tasks:</h2>
            <div className={style.taskList}>
              {child.assignedCognitiveOnChild.map((task, i) => (
                <div className={style.task} key={i} onClick={() => navigate(`/cognitive/${task.cognitiveTaskId}`)}>
                  <h3>{task.task.name}</h3>
                  <p>Cognitive</p>
                </div>
              ))}
              {child.availableYogaOnChild.map((task, i) => (
                <div className={style.task}  key={i} onClick={() => navigate(`/yoga/${task.yogaId}`)}>
                  <h3>{task.yoga.name}</h3>
                  <p>Yoga</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={require("../../assets/images/Saly-1.png")}
            alt="girl on a rocket"
          />
        </div>
      </main>
    );
  }
};

export default Home;
