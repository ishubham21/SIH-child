import * as tf from "@tensorflow/tfjs";
import * as tmPose from "@teachablemachine/pose";
import { useParams } from "react-router-dom";

import style from "./YogaAI.module.css";

const YogaAI = () => {
  const asana = useParams().asana;
  console.log(asana);

  const models = {
    DownwardDog: {
      name: "Downward Dog",
      model: "http://127.0.0.1:8080/model.json",
      metadata: "http://127.0.0.1:8080/metadata.json",
    },
  };
  // More API functions here:
  // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/pose

  // the link to your model provided by Teachable Machine export panel
  const URL = "../../assets/adho mukha svanasana/";
  let model, webcam, ctx, labelContainer, maxPredictions;

  async function init() {
    //const modelURL = URL + 'model.json';
    //const metadataURL = URL + 'metadata.json';
    const modelURL = models[asana].model;
    const metadataURL = models[asana].metadata;

    // load the model and metadata
    // Refer to tmPose.loadFromFiles() in the API to support files from a file picker
    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmPose.Webcam(200, 200, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    webcam.play();
    window.requestAnimationFrame(loop);

    // append/get elements to the DOM
    const canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
      // and class labels
      labelContainer.appendChild(document.createElement("p"));
    }
  }

  async function loop(timestamp) {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop), 500;
  }

  async function predict() {
    // Prediction #1: run input through posenet
    // estimatePose can take in an image, video or canvas html element
    const { pose, posenetOutput } = await model.estimatePose(
      webcam.canvas,
    );
    // Prediction 2: run input through teachable machine classification model
    const prediction = await model.predict(posenetOutput);
    console.log(prediction);
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className +
        ": " +
        prediction[i].probability.toFixed(2);
      labelContainer.childNodes[i].innerHTML = classPrediction;
    }

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
          <img src={require("../../assets/asanas/Plank-Pose.jpg")} />
        </div>
        <div className={style.testasana}>
          <h2>{models[asana].name}</h2>
          <button type="button" onClick={init}>
            Start
          </button>
          <div className={style.canvas}>
            <canvas id="canvas"></canvas>
          </div>
          <div
            id="label-container"
            className={style.label_container}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default YogaAI;
