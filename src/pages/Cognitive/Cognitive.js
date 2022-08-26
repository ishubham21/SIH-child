import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ChildContext from "../../context/childContext";
import style from "./Cognitive.module.css";

const TestCard = ({ taskData: { task }, childId }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < task.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    };
  }
  return (
    <div className={style.app}>
      {showScore ? (
        <div className={style.scoreSection}>
          You scored {score} out of {task.questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className={style.questionCount}>
              <span>Question {currentQuestion + 1}</span>/{task.questions.length}
            </div>
            <div className={style.questionText}>{task.questions[currentQuestion].questionText}</div>
          </div>
          <div className={style.form}>
            {task.questions[currentQuestion].answerOptions.map((answerOption, i) => (
              <button key={i} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const Cognitive = () => {
  const { child, updateChild } = useContext(ChildContext)
  const id = useParams().cognitiveTaskId

  const css = `body {
    background: linear-gradient(180deg, #FFFFFF 66.15%, #FFD348 66.16%);
  }`;

  //console.log(child.assignedCognitiveOnChild)

  const taskData = child.assignedCognitiveOnChild.filter(task => {
    console.log(task.cognitiveTaskId, id)
    if (task.cognitiveTaskId === parseInt(id)) {
      return task
    }
  })[0]
  console.log(taskData)

  return (
    <main className={style.main}>
      <style>{css}</style>
      <div className={style.section}>
        <TestCard taskData={taskData} childId={taskData.childId} />
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
