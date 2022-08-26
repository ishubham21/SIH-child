import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ChildContext from "../../context/childContext";
import style from "./Cognitive.module.css";

const TestCard = ({taskData: {task} }) => {
  const [question, setQuestion] = useState(null)
  console.log(task)
  let score = 0
  const submitTask = () => {
    return;
  };

  // if quiz exists
  if (question !== null) {
    return (
      <div className={style.card}>
        <h2>Cognitive</h2>
        <h3>{task.name}</h3>
        <button onClick={() => setQuestion(0)}>Start</button>
        <p>{task.description}</p>
      </div>
    );
  } else if (question < task.questions.length) {
    return (
      <div className={`${style.quiz} ${style.card}`}>
        <h3>{task.name}</h3>
        <br />
        <p>
          Q{question}. {task.questions[0].questionText}
        </p>
        <br />
        <form className={style.form}>
          {task.questions[0].answerOptions.map((option, i) => (
            <label key={i}>
              <input type="radio" value={option.answerText} name={task.id} />
              {option.answerText}
            </label>
          ))}
          <button onClick={() => setQuestion(question+1)}>Next</button>
        </form>
      </div>
    );
  } else if (question === task.questions.length) {
    // submit quiz score
    submitTask(id)
    // quiz completed
    return (
      <div className={style.card}>
        <h2>Great Job!</h2>
        <h3>Score: {score}/4</h3>
        <button onClick={() => setQuestion(0)}>Start</button>
        <p>{task.description}</p>
      </div>
    )
  }
};

const Cognitive = () => {
  const { child, updateChild } = useContext(ChildContext)
  const id = useParams().cognitiveTaskId

  const css = `body {
    background: linear-gradient(180deg, #FFFFFF 66.15%, #FFD348 66.16%);
  }`;

  //console.log(child.assignedCognitiveOnChild)

  const taskData = child.assignedCognitiveOnChild.filter(task => {
    console.log(task.cognitiveTaskId, id)
    if(task.cognitiveTaskId === parseInt(id)) {
      return task
    }
  })[0]
  console.log(taskData)

  return (
    <main className={style.main}>
      <style>{css}</style>
      <div className={style.section}>
        <TestCard taskData={taskData} />
        {/* <div className={style.img}>
          <img
            src={require("../../assets/images/Saly-10.png")}
            alt="doodle"
          />
        </div> */}
      </div>
    </main>
  );
};

export default Cognitive;
