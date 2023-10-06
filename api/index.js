require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();
const dbConnection = require('./database/connectionMySQL');

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server is running on port 5000');
});

