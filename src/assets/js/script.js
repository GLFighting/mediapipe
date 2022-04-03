import { Camera } from '@mediapipe/camera_utils'
import { FPS, ControlPanel, StaticText, Toggle, Slider } from '@mediapipe/control_utils'
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils'
import {
  FaceMesh, FACEMESH_RIGHT_EYE, FACEMESH_RIGHT_EYEBROW,
  FACEMESH_RIGHT_IRIS, FACEMESH_LEFT_EYE, FACEMESH_LEFT_EYEBROW,
  FACEMESH_LEFT_IRIS, FACEMESH_FACE_OVAL, FACEMESH_LIPS, FACEMESH_TESSELATION
} from '@mediapipe/face_mesh'
// import '../js/hands'
// import '../js/pose'

function script() {
  const videoElement = document.getElementsByClassName('input_video')[0];
  const canvasElement = document.getElementsByClassName('output_canvas')[0];
  const canvasCtx = canvasElement.getContext('2d');

  function onResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);
    if (results.multiFaceLandmarks) {
      for (const landmarks of results.multiFaceLandmarks) {
        drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION,
          { color: '#C0C0C070', lineWidth: 1 });
        drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYE, { color: '#FF3030' });
        drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYEBROW, { color: '#FF3030' });
        drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_IRIS, { color: '#FF3030' });
        drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYE, { color: '#30FF30' });
        drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYEBROW, { color: '#30FF30' });
        drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_IRIS, { color: '#30FF30' });
        drawConnectors(canvasCtx, landmarks, FACEMESH_FACE_OVAL, { color: '#E0E0E0' });
        drawConnectors(canvasCtx, landmarks, FACEMESH_LIPS, { color: '#E0E0E0' });
      }
    }
    canvasCtx.restore();
  }

  const faceMesh = new FaceMesh({
    locateFile: (file) => {
      console.log(file)
      console.log(`@/assets/js/face_mesh/${file}`)
      return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
      // return `@/assets/js/face_mesh/${file}`;
      // return `document.write('<script src="@/assets/js/face_mesh/${file}"><\/script>')`;
      // return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh`;
    }
  });
  console.log(faceMesh)
  faceMesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });
  faceMesh.onResults(onResults);

  const camera = new Camera(videoElement, {
    onFrame: async () => {
      await faceMesh.send({ image: videoElement });
    },
    width: 1280,
    height: 720
  });
  // console.log(1111);
  camera.start();
}

export { script }