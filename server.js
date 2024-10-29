const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Endpoint to flip the coin
app.get('/flip', (req, res) => {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    res.json({ result });
});

// Start the server
server.listen(8000);
