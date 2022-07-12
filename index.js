const express = require('express');
const format = require('date-format');

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello World</h1>');
});

app.get('/api/v1/:token', (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});

app.get('/api/v1/instagram', (req, res) => {
  const instaSocial = {
    Username: 'gauravpawar',
    followers: 66,
    following: 81,
    date: format.asString('dd/MM/yy hh:mm:ss', new Date()),
  };

  res.status(200).send({ instaSocial });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
