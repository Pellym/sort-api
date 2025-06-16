const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/sort-string', (req, res) => {
  const { data } = req.body;

  if (typeof data !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const sorted = data.split('').sort();
  res.json({ word: sorted });
});

// 👇 This line is very important for Vercel
module.exports = app;

