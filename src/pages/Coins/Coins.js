import { useState } from "react";
import style from "./Coins.module.css";

const Coins = () => {
  const [coins, changeCoins] = useState(0);

  const css = `
    body {
      background: linear-gradient(180deg, #5D9CFB 37.5%, #FFFFFF 37.51%);
    }
  `;

  return (
    <main className={style.main}>
      <style>{css}</style>
      <div className={style.title}>
        <h2>Congratulations! You&apos;ve got</h2>
      </div>
      <div className={style.section}>
        <div className={style.boy}>
          <img
            src={require("../../assets/images/boy-2.png")}
            alt="A boy"
          />
        </div>

        <div className={style.doodle}>
          <div className={style.images}>
            <img
              src={require("../../assets/images/doodle-1.png")}
              alt="doodle"
            />
            <img
              src={require("../../assets/images/doodle-2.png")}
              alt="doodle"
            />
            <img
              src={require("../../assets/images/doodle-3.png")}
              alt="doodle"
            />
          </div>
          <h3 className={style.coin}>{coins} Coins</h3>
          <div className={style.images}>
            <img
              src={require("../../assets/images/doodle-6.png")}
              alt="doodle"
            />
            <img
              src={require("../../assets/images/doodle-5.png")}
              alt="doodle"
            />
            <img
              src={require("../../assets/images/doodle-4.png")}
              alt="doodle"
            />
          </div>
          <p>Keep it up champ!</p>
        </div>
      </div>
    </main>
  );
};

export default Coins;
