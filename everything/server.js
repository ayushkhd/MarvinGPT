const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const fs = require('fs');


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

app.get('/logo', (req, res) => {
    res.sendFile('logo.png', { root: '.' })
});

app.get('/openapi.yaml', (req, res) => {
    res.sendFile('openapi.yaml', { root: '.' })

});


app.get("/.well-known/ai-plugin.json", (req, res) => {
    ai_plugin = {
        "schema_version": "v1",
        "name_for_human": "MarvinGPT EQ",
        "name_for_model": "MarvinGPT Emotional Intelligence",
        "description_for_human": "Plugin for monitoring the human's emotions and responding in an empathetic manner.",
        "description_for_model": "Plugin for monitoring the human's emotions and responding in an empathetic manner.",
        "auth": {
            "type": "none"
        },
        "api": {
            "type": "openapi",
            "url": "http://localhost:3000/openapi.yaml",
            "is_user_authenticated": false
        },
        "logo_url": "http://localhost:3000/logo.png",
        "contact_email": "support@example.com",
        "legal_info_url": "https://example.com/legal"
    };

    res.json(ai_plugin)
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});