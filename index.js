const express = require('express');
const hotelApi = require('./routes/hotel');
const { config } = require('./config/index');

const app = express();

// body parser
app.use(express.json());

// routes
hotelApi(app);

app.listen(config.port, () =>
  console.log(`Listening http://localhost:${config.port}`)
);
