import { convertData } from "./converter.js";
import express from 'express';

const app = express();
app.use(express.json());

app.post('/api/convert', (req, res) => {
  const csvData = convertData(req.body); // your conversion logic

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="data.csv"');
  res.send(csvData);
})

app.listen(3300, () => {
  console.log('listening on http://localhost:3300/ 🔥');
})
