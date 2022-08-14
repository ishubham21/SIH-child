import { useState } from "react";
import style from "./Psychomotor.module.css";

const TestCard = ({ level, quiz, startQuiz }) => {
  const nextQues = () => {
    return;
  };

  // if quiz exists
  if (quiz) {
    console.log("quiz started");
    return (
      <div className={style.quiz}>
        <h3>Level {level.number}</h3>
        <br />
        <p>
          Q{quiz.id}. {quiz.name}
        </p>
        <br />
        <form className={style.form}>
          {quiz.options.map((option) => (
            <label key={option[0]}>
              <input type="radio" value={option[0]} name={quiz.id} />
              {option[1]}
            </label>
          ))}
          <button onClick={nextQues}>Next</button>
        </form>
      </div>
    );
  }
  // else show start quiz dialog
  else {
    return (
      <div className={style.card}>
        <h2>Cognitive</h2>
        <h3>Level {level.number}</h3>
        <button onClick={startQuiz}>Start</button>
        <p>{level.desc}</p>
      </div>
    );
  }
};

const Psychomotor = () => {
  const quizSample = {
    id: 1,
    name: "ihdeg gpoeg eopw siv gheapi sibv sovneo prskfhe fir iv efp id vdpi kbt bLs didg a;iv soc cfiebf sdoberoe aocd ssvod foeg sov ci?",
    options: [
      [1, "optionOne"],
      [2, "optionTwo"],
      [3, "optionThree"],
      [4, "optionFour"],
    ],
    answer: "optionOne",
  };

  const [level, changeLevel] = useState({
    number: 0,
    desc: "ihdeg gpoeg eopw siv gheapi sibv sovneo prskfhe fir iv efp id vdpi kbt bLs didg a;iv soc cfiebf sdoberoe aocd ssvod foeg sov cid git xkv podthnrg eor vodf egibediov slvieigh irgu9r x irguetg dg9rtg scf9t fkidwur9v efij8 kcbsov si ig roisn vkeot p ieijd ioev ij  eiueu siffkdvehvz dli kfdfnv sdil;gnh",
  });
  const [quiz, changeQuiz] = useState(null);

  const css = `body {
    background: linear-gradient(180deg, #FFFFFF 66.15%, #FFD348 66.16%);
  }`;

  const startQuiz = () => {
    changeQuiz(quizSample);
  };

  return (
    <main className={style.main}>
      <style>{css}</style>
      <div className={style.section}>
        <div>
          <img
            src={require("../../assets/images/Saly-5.png")}
            alt="doodle"
          />
        </div>
        <TestCard quiz={quiz} level={level} startQuiz={startQuiz} />
      </div>
    </main>
  );
};

export default Psychomotor;
