import * as tf from "@tensorflow/tfjs";
import * as tmPose from "@teachablemachine/pose";
import { useParams } from "react-router-dom";

import style from "./YogaAI.module.css";
import { time } from "@tensorflow/tfjs";

const YogaAI = () => {
  const yogaId = useParams().yogaId;
  console.log(yogaId.toString());

  const models = {
    DownwardDogPose: {
      name: "Downward Dog Pose",
      model: "https://teachablemachine.withgoogle.com/models/ljpcXxTz1/",
      video: "https://www.youtube-nocookie.com/embed/lZL7oh2lOgE",
    },
    ButterflyPose: {
      name: "Butterfly Pose",
      model: "https://teachablemachine.withgoogle.com/models/wRVL7Bj4u/",
      video: "https://www.youtube-nocookie.com/embed/hRcvSEtoecg?start=16",
    },
    CobraPose: {
      name: "Cobra Pose",
      model: "https://teachablemachine.withgoogle.com/models/yKMXeNB9V/",
      video: "https://www.youtube-nocookie.com/embed/-HgeZztTSec",
    },
    PlankPose: {
      name: "Plank Pose",
      model: "https://teachablemachine.withgoogle.com/models/kVDZ9byTw/",
      video: "https://www.youtube-nocookie.com/embed/CE1H0g-1UB8",
    },
    MountainPose: {
      name: "Mountain Pose",
      model: "https://teachablemachine.withgoogle.com/models/-8WdCRIpp/",
      video: "https://www.youtube-nocookie.com/embed/QM9x8ZpaYPc",
    },
    WarriorPose: {
      name: "Warrior Pose",
      model: "https://teachablemachine.withgoogle.com/models/NhL6lpgyE/",
      video: "https://www.youtube-nocookie.com/embed/fiOXtyjQzY8",
    },
    TreePose: {
      name: "Tree Pose",
      model: "https://teachablemachine.withgoogle.com/models/NhL6lpgyE/",
      video: "https://www.youtube-nocookie.com/embed/Dic293YNJI8",
    },
  };
  // More API functions here:
  // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/pose

  // the link to your model provided by Teachable Machine export panel
  const URL = "https://teachablemachine.withgoogle.com/models/wRVL7Bj4u/";
  let model, webcam, ctx, labelContainer, maxPredictions;

  async function init() {
    //const modelURL = URL + 'model.json';
    //const metadataURL = URL + 'metadata.json';
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
    for (let i = 0; i < maxPredictions; i++) { // and class labels
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
    // console.log(prediction);
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className + ": " + prediction[i].probability.toFixed(2);
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
          <iframe width="560" height="315"
            src={models[yogaId].video} title="YouTube video player"
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className={style.testasana}>
          <h2>{models[yogaId].name}</h2>
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
// http-server -c1 --cors .
