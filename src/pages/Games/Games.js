import style from "./Games.module.css";
import { Link } from "react-router-dom";

const Games = () => {
  const css = `
    body {
      background: linear-gradient(180deg, #5D9CFB 37.5%, #FFFFFF 37.51%);
    }
  `;

  return (
    <main className={style.main}>
      <style>{css}</style>
      <div className={style.gamegrid}>
        <Link to={"2048"} className={style.game}>
          <img src={require("../../assets/gamecovers/2048.png")} />
          <h3>2048</h3>
        </Link>
        <Link to={"SpellWizard"} className={style.game}>
          <img
            src={require("../../assets/gamecovers/SpellWizard.png")}
          />
          <h3>Spell Wizard</h3>
        </Link>
        <Link to={"DunkShot"} className={style.game}>
          <img
            src={require("../../assets/gamecovers/DunkShot.png")}
          />
          <h3>Dunk Shot</h3>
        </Link>
        <Link to={"SlitSight"} className={style.game}>
          <img
            src={require("../../assets/gamecovers/SlitSight.png")}
          />
          <h3>Slit Sight</h3>
        </Link>
        <Link to={"WordFinder"} className={style.game}>
          <img
            src={require("../../assets/gamecovers/WordFinder.png")}
          />
          <h3>Word Finder</h3>
        </Link>
        <Link to={"TicTacToe"} className={style.game}>
          <img
            src={require("../../assets/gamecovers/TicTacToe.png")}
          />
          <h3>Tic Tac Toe</h3>
        </Link>
      </div>
    </main>
  );
};

export default Games;
