import { useState } from "react";
import style from "./Cognitive.module.css";

const Cognitive = () => {
  const [level, changeLevel] = useState(0);
  const [desc, changeDesc] = useState(
    "ihdeg gpoeg eopw siv gheapi sibv sovneo prskfhe fir iv efp id vdpi kbt bLs didg a;iv soc cfiebf sdoberoe aocd ssvod foeg sov cid git xkv podthnrg eor vodf egibediov slvieigh irgu9r x irguetg dg9rtg scf9t fkidwur9v efij8 kcbsov si ig roisn vkeot p ieijd ioev ij  eiueu siffkdvehvz dli kfdfnv sdil;gnh",
  );

  const css = `
    body {
      background: linear-gradient(180deg, #FFFFFF 66.15%, #FFD348 66.16%);
    }
  `;

  return (
    <main className={style.main}>
      <style>{css}</style>
      <div className={style.section}>
        <div className={style.card}>
          <h2>Cognitive</h2>
          <h3>Level {level}</h3>
          <button>Start</button>
          <p>{desc}</p>
        </div>
        <div>
          <img
            src={require("../../assets/images/Saly-10.png")}
            alt="doodle"
          />
        </div>
      </div>
    </main>
  );
};

export default Cognitive;
