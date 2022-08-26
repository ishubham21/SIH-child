import * as tf from "@tensorflow/tfjs";
import * as tmPose from "@teachablemachine/pose";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChildContext from "../../context/childContext";

import config from "../../config"
import style from "./YogaAI.module.css";
import { time } from "@tensorflow/tfjs";

const YogaAI = () => {
  const { child, updateChild } = useContext(ChildContext)
  const id = useParams().yogaId;

  const models = [
    {
      id: 1,
      name: "Downward Dog Pose",
      model: "https://teachablemachine.withgoogle.com/models/ljpcXxTz1/",
      video: "https://www.youtube-nocookie.com/embed/lZL7oh2lOgE",
    },
    {
      id: 2,
      name: "Butterfly Pose",
      model: "https://teachablemachine.withgoogle.com/models/wRVL7Bj4u/",
      video: "https://www.youtube-nocookie.com/embed/hRcvSEtoecg?start=16",
    },
    {
      id: 3,
      name: "Cobra Pose",
      model: "https://teachablemachine.withgoogle.com/models/yKMXeNB9V/",
      video: "https://www.youtube-nocookie.com/embed/-HgeZztTSec",
    },
    {
      id: 4,
      name: "Plank Pose",
      model: "https://teachablemachine.withgoogle.com/models/kVDZ9byTw/",
      video: "https://www.youtube-nocookie.com/embed/CE1H0g-1UB8",
    },
    {
      id: 5,
      name: "Mountain Pose",
      model: "https://teachablemachine.withgoogle.com/models/-8WdCRIpp/",
      video: "https://www.youtube-nocookie.com/embed/QM9x8ZpaYPc",
    },
    {
      id: 6,
      name: "Warrior Pose",
      model: "https://teachablemachine.withgoogle.com/models/NhL6lpgyE/",
      video: "https://www.youtube-nocookie.com/embed/fiOXtyjQzY8",
    },
    {
      id: 7,
      name: "Tree Pose",
      model: "https://teachablemachine.withgoogle.com/models/NhL6lpgyE/",
      video: "https://www.youtube-nocookie.com/embed/Dic293YNJI8",
    },
  ];
  // More API functions here:
  // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/pose

  // the link to your model provided by Teachable Machine export panel
  //const URL = "https://teachablemachine.withgoogle.com/models/wRVL7Bj4u/";
  let model, webcam, ctx, labelContainer, maxPredictions;

  console.log(child)
  // const yogaData = child.assignedYogaOnChild.filter(yoga => {
  //   console.log(yoga.yogaId, id)
  //   if(yoga.yogaId === parseInt(id)) {
  //     return yoga
  //   }
  // })[0]
  const yogaData = models.filter(yoga => {
    console.log(yoga.yogaId, id)
    if(yoga.id === parseInt(id)) {
      return yoga
    }
  })[0]

  const submitYoga = () => {
    fetch(`${config.baseUrl}/${config.complete}/yoga`, {
      method: "POST",
      body: JSON.stringify({
        "yogaId": id, //firse number hai yeh bina braces ka, idhr test ni krne se phle change krlena ise apni collection mai,
        "childId": yogaData.childId
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          console.log(response.error)
        } else {
          updateChild(response.data)
          console.log(response.data)
        }
      })
  }

  async function init() {
    //const modelURL = URL + 'model.json';
    //const metadataURL = URL + 'metadata.json';
    // const URL = yogaData.yoga.modelLink;
    const URL = yogaData.model;
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmPose.loadFromFiles() in the API to support files from a file picker
    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const size = 200;
    const flip = true; // whether to flip the webcam
    webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append/get elements to the DOM
    const canvas = document.getElementById("canvas");
    canvas.width = size; canvas.height = size;
    ctx = canvas.getContext("2d");
    labelContainer = document.getElementById("label-container");
    labelContainer.appendChild(document.createElement("p"));
    // for (let i = 0; i < maxPredictions; i++) { // and class labels
    //   labelContainer.appendChild(document.createElement("p"));
    // }
  }

  async function loop(timestamp) {
    setTimeout(async () => {
      webcam.update(); // update the webcam frame
      await predict();
      window.requestAnimationFrame(loop), 500;
    }, 100)
  }

  async function predict() {
    // Prediction #1: run input through posenet
    // estimatePose can take in an image, video or canvas html element
    const { pose, posenetOutput } = await model.estimatePose(
      webcam.canvas,
    );
    // Prediction 2: run input through teachable machine classification model
    const prediction = await model.predict(posenetOutput);
    // console.log(prediction);
    const classPrediction =
      prediction[0].className + ": " + parseInt(prediction[0].probability.toFixed(2)*100) + "%";
    labelContainer.childNodes[0].innerHTML = classPrediction;
    // for (let i = 0; i < maxPredictions; i++) {
    //   const classPrediction =
    //     prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    //   labelContainer.childNodes[i].innerHTML = classPrediction;
    // }

    // finally draw the poses
    drawPose(pose);
  }

  function drawPose(pose) {
    ctx.drawImage(webcam.canvas, 0, 0);
    // draw the keypoints and skeleton
    if (pose) {
      const minPartConfidence = 0.5;
      tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
      tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
    }
  }

  return (
    <div className={style.main}>
      <div className={style.section}>
        <div className={style.demoasana}>
          <iframe width="560" height="315"
            src={yogaData.video} title="YouTube video player"
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className={style.testasana}>
          <h2>{yogaData.name}</h2>
          <button type="button" className={style.startBtn} onClick={init}>
            Start
          </button>
          <div className={style.canvas}>
            <canvas id="canvas"></canvas>
          </div>
          <div
            id="label-container"
            className={style.label_container}
          ></div>
          <button type="submit" className={style.submitBtn} onClick={submitYoga}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default YogaAI;
// http-server -c1 --cors .
