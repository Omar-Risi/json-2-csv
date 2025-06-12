const express = require('express');
const cors = require('cors');
const converter = require('./converter.js');

const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('OK');
})

app.post('/api/convert', (req, res) => {
  try {
    const csvData = converter.convertData([req.body.data]);
    res.send(csvData);
  } catch (e) {
    res.send(`API Error: ${e}`, 400);
  }
})

app.listen(3300, () => {
  console.log('listening on http://localhost:3300/ 🔥');
})
