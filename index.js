const express = require('express');
const { config } = require('./config/index');

const app = express();

// body parser
app.use(express.json());

app.get('/', function(req, res) {
  res.status(200).send('Welcome to our Almundo restful API');
});

app.listen(config.port, () =>
  console.log(`Listening http://localhost:${config.port}`)
);
