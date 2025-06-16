module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { data } = req.body;

    if (typeof data !== 'string') {
      return res.status(400).json({ error: 'Invalid input' });
    }

    const sorted = data.split('').sort();
    return res.status(200).json({ word: sorted });
  }

  res.status(405).json({ error: 'Only POST requests are allowed' });
};
