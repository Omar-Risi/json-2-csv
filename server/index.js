import converter from "./converter.js";
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send("Server works");
})

app.listen(3300, () => {
  console.log('listening on http://localhost:3300/ 🔥');
})
