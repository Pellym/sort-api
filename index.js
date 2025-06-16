
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/sort-string', (req, res) => {
  const { data } = req.body;

  if (!data || typeof data !== 'string') {
    return res.status(400).json({ error: 'Invalid input. Expected a string in the "data" field.' });
  }

  // Convert string to array, sort it, return as a word
  const sortedArray = data.split('').sort();

  return res.status(200).json({ word: sortedArray });
});

module.exports = app;
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/sort-string', (req, res) => {
  const { data } = req.body;

  if (!data || typeof data !== 'string') {
    return res.status(400).json({ error: 'Invalid input. Expected a string in the "data" field.' });
  }

  // Convert string to array, sort it, return as a word
  const sortedArray = data.split('').sort();

  return res.status(200).json({ word: sortedArray });
});

module.exports = app;
>>>>>>> 3ac18a53b516dfe9abb2cfcfb735596bbbe8ad40
