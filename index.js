const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
// const ngrok = require("@ngrok/ngrok");
// const axios = require('axios');

const app = express();
const port = 10867; // You can change the port if needed

// Middleware to parse JSON body
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`-- Server is running --`);
});