import style from "./Games.module.css";
import { Link } from "react-router-dom";

const Games = ({ gameList }) => {
  const css = `
    body {
      background: linear-gradient(180deg, #5D9CFB 37.5%, #FFFFFF 37.51%);
    }
  `;

  return (
    <main>
      <style>{css}</style>
      <div className={style.gamegrid}>
        {gameList.map((game) => (
          <Link to={game.url} key={game.url} className={style.game}>
            <img src={require(`../../assets/gamecovers/${game.image}`)} />
            <h3>{game.name}</h3>
          </Link>
        ))}
        <Link to={"2048"} className={style.game}>
          <img src={require(`../../assets/gamecovers/${'2048.png'}`)} />
          <h3>2048</h3>
        </Link>
        <Link to={"SpellWizard"} className={style.game}>
          <img src={require("../../assets/gamecovers/SpellWizard.png")} />
          <h3>Spell Wizard</h3>
        </Link>
        <Link to={"2048"} className={style.game}>
          <img src={require("../../assets/gamecovers/2048.png")} />
          <h3>2048</h3>
        </Link>
        <Link to={"2048"} className={style.game}>
          <img src={require("../../assets/gamecovers/2048.png")} />
          <h3>2048</h3>
        </Link>
      </div>
    </main>
  );
};

export default Games;
