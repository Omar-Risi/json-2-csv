import { convertData } from "./converter.js";
import express from 'express';
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

app.post('/api/convert', (req, res) => {
  const csvData = convertData(JSON.parse(req.body)); // your conversion logic

  res.setHeader('Content-Type', 'text/plain');
  res.send(csvData);
})

app.listen(3300, () => {
  console.log('listening on http://localhost:3300/ 🔥');
})
