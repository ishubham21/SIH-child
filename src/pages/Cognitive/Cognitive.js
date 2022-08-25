import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ChildContext from "../../context/childContext";
import style from "./Cognitive.module.css";

const TestCard = ({ cognitiveTaskId, name, description, questions }) => {
  const [question, setQuestion] = useState(null)
  let score = 0
  const submitTask = ( cognitiveTaskId ) => {
    return;
  };

  // if quiz exists
  if (question !== null && question < 4) {
    return (
      <div className={`${style.quiz} ${style.card}`}>
        <h3>{name}</h3>
        <br />
        <p>
          Q{question}. {questions[question].questionText}
        </p>
        <br />
        <form className={style.form}>
          {question.answerOptions.map((option, i) => (
            <label key={i}>
              <input type="radio" value={option.answerText} name={quesId} />
              {option[1]}
            </label>
          ))}
          <button onClick={() => setQuestion(question+1)}>Next</button>
        </form>
      </div>
    );
  } else if (question === 4) {
    // submit quiz score
    submitTask(id)
    // quiz completed
    return (
      <div className={style.card}>
        <h2>Great Job!</h2>
        <h3>Score: {score}/4</h3>
        <button onClick={() => setQuestion(0)}>Start</button>
        <p>{description}</p>
      </div>
    )
  }
  // else show start quiz dialog
  else {
    return (
      <div className={style.card}>
        <h2>Cognitive</h2>
        <h3>{name}</h3>
        <button onClick={() => setQuestion(0)}>Start</button>
        <p>{description}</p>
      </div>
    );
  }
};

const Cognitive = () => {
  const { child, updateChild } = useContext(ChildContext)
  const id = useParams().cognitiveTaskId

  // const quizSample = {
  //   id: 1,
  //   name: "ihdeg gpoeg eopw siv gheapi sibv sovneo prskfhe fir iv efp id vdpi kbt bLs didg a;iv soc cfiebf sdoberoe aocd ssvod foeg sov ci?",
  //   options: [
  //     [1, "optionOne"],
  //     [2, "optionTwo"],
  //     [3, "optionThree"],
  //     [4, "optionFour"],
  //   ],
  //   answer: "optionOne",
  // };

  const css = `body {
    background: linear-gradient(180deg, #FFFFFF 66.15%, #FFD348 66.16%);
  }`;

  console.log(child.assignedCognitiveOnChild)

  const taskData = child.assignedCognitiveOnChild.filter(task => {
    console.log(task.cognitiveTaskId, id)
    if(task.cognitiveTaskId === parseInt(id)) {
      return task
    }
  })
  console.log(taskData)

  return (
    <main className={style.main}>
      <style>{css}</style>
      <div className={style.section}>
        <TestCard taskData={taskData} />
        <div className={style.img}>
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
