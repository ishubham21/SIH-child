import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Games.module.css";

const GameIframe = () => {
  const css = `
    html, main, #root { height: 100%; }
    body { background: none; }
    header { display: none; }
  `;
  const game = useParams().game
  const games = {
    2048: "https://www.gamezop.com/g/NyM_JGWcx?id=zv1Y2I8P",
    SpellWizard: "https://www.gamezop.com/g/zMxz8LNrp?id=zv1Y2I8P",
    DunkShot: "https://www.gamezop.com/g/S1Ne12TQqCH?id=zv1Y2I8P",
    SlitSight: "https://www.gamezop.com/g/S1Ne12TQqCH?id=zv1Y2I8P",
    WordFinder: "https://www.gamezop.com/g/r1K-J3TQ5Ar?id=zv1Y2I8P",
    TicTacToe: "https://www.gamezop.com/g/H1WmafkP9JQ?id=zv1Y2I8P",
  }

  return (
    <main className={style.main}>
      <style>{css}</style>
      <iframe
        seamless="seamless"
        allowtransparency="true"
        allowFullScreen={true}
        frameBorder="0"
        className={style.iframe}
        src={games[game]}
      ></iframe>
    </main>
  );
};

export default GameIframe;
