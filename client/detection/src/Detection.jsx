import React, { useState, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import Loader from "./components/loader";
import ButtonHandler from "./components/btn-handler";
import { detectImage, detectVideo } from "./utils/detect";
import "./style/Detection.css";


// const getItem=()=>{
//   localStorage.getItem('curedata',cureData)
// }
const Detection = () => {

  // console.log("gi" + details)
  const [loading, setLoading] = useState({ loading: true, progress: 0 });
  const [model, setModel] = useState({
    net: null,
    inputShape: [1, 0, 0, 3],
  });

  const imageRef = useRef(null);
  const cameraRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const modelName = "yolov5n";
  const classThreshold = 0.18;


  useEffect(() => {
    tf.ready().then(async () => {
      const yolov5 = await tf.loadGraphModel(
        `${window.location.origin}/${modelName}_web_model/model.json`,
        {
          onProgress: (fractions) => {
            setLoading({ loading: true, progress: fractions });
          },
        }
      );

      const dummyInput = tf.ones(yolov5.inputs[0].shape);
      const warmupResult = await yolov5.executeAsync(dummyInput);
      tf.dispose(warmupResult);
      tf.dispose(dummyInput);

      setLoading({ loading: false, progress: 1 });
      setModel({
        net: yolov5,
        inputShape: yolov5.inputs[0].shape,
      });
    });
  }, []);



  return (
    <div className="App">
      {loading.loading && (
        <Loader>
          মডেল লোড হচ্ছে... {(loading.progress * 100).toFixed(2)}%
        </Loader>
      )}
      <div className="header">
        <h1>ফসলের রোগ নির্ণয় করুন</h1>
        <br></br>
        <p>আলুর রোগ শনাক্ত করতে পারবেন</p>
        <br></br>
        <br></br>
      </div>

      <div className="content">
        <img
          src="#"
          ref={imageRef}
          onLoad={() =>
            detectImage(imageRef.current, model, classThreshold, canvasRef.current)
          }
        />
        <video
          autoPlay
          muted
          ref={cameraRef}
          onPlay={() =>
            detectVideo(cameraRef.current, model, classThreshold, canvasRef.current)
          }
        />
        <video
          autoPlay
          muted
          ref={videoRef}
          onPlay={() =>
            detectVideo(videoRef.current, model, classThreshold, canvasRef.current)
          }
        />
        <canvas width={model.inputShape[1]} height={model.inputShape[2]} ref={canvasRef} />
      </div>

      <ButtonHandler
        imageRef={imageRef}
        cameraRef={cameraRef}
        videoRef={videoRef}
        onClick={() => executeGetItemDelayed()} // Set the state to trigger getItem

      />

        <div>
          <br></br>
          <p id="cure_disease"> </p><br></br>
          <p id="cure_symptom"> </p><br></br>
          <p id="cure_cure"> </p>
        </div>
   
    </div>
  );
};

export default Detection;
