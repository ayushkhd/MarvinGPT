const express = require("express");
const app = express();

// Use the express.json() middleware to parse JSON request bodies
app.use(express.json());

// Define an API endpoint that adds two numbers and returns the result
app.post("/get-emotion", (req, res) => {
  const result = getCurrentEmotion();
  res.json({ result });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

const image = new Image();

// Set the src property to the image URL
image.src =
  "https://media.istockphoto.com/id/1399611762/photo/offended-little-hispanic-girl-looking-sad-and-upset-while-posing-against-a-blue-studio.jpg?b=1&s=170667a&w=0&k=20&c=r4A6C1FfjAwnWl0ZVL9t6EIkDhGo8o4KSdYNwzvKJsY=";

// Add an event listener for the 'load' event to detect when the image has finished loading
image.addEventListener("load", () => {
  console.log("Image has been loaded successfully.");
});

// Add an event listener for the 'error' event to handle any errors that occur while loading the image
image.addEventListener("error", (error) => {
  console.error("An error occurred while loading the image:", error);
});

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/models"),
]);

function getCurrentEmotion() {
  const detections = faceapi.detectSingleFace(image).withFaceExpressions();
  print(detections);
  return detections ? detections[0] : "neutral";
}
