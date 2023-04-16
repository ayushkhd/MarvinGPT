const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

let latestEmotion = 'neutral';

app.use(cors());
app.use(express.json());

app.post('/send-emotion', (req, res) => {
  const receivedEmotion = req.body.emotion;
  latestEmotion = receivedEmotion;
  console.log('Received emotion:', receivedEmotion);
  res.json({ message: 'Emotion received successfully!' });
});

app.get('/get-latest-emotion', (req, res) => {
  res.json({ emotion: latestEmotion });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});