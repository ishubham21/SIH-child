import { useState } from "react";
import style from "./Home.module.css";

const Home = ({ name, taskList }) => {
  const [tasks, changeTasks] = useState(taskList);
  console.log(tasks);

  const css = `
    body {
      background: linear-gradient(180deg, #FFFFFF 81.24%, #5D9CFB 81.25%);
    }
  `;

  return (
    <main className={style.main}>
      <style>{css}</style>
      <div className={style.title}>
        <img
          src={require("../../assets/images/planet.png")}
          alt="planet"
        />
        <h1>Hello Ben, good luck for the new day!</h1>
      </div>
      <div className={style.hero}>
        <div className={style.card}>
          <h2>Check today&apos;s </h2>
          <h2>tasks:</h2>
          <div className={style.taskList}></div>
        </div>
        <img
          src={require("../../assets/images/Saly-1.png")}
          alt="girl on a rocket"
        />
      </div>
    </main>
  );
};

export default Home;
