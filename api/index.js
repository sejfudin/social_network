require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const userRoutes = require('./routes/userRoutes')


const app = express();
app.use(express.json());
const dbConnection = require('./database/connectionMySQL');

app.use('/user', userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server is running on port 5000');
});

