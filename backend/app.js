const cors = require("cors")
const dotenv = require('dotenv');
dotenv.config();
const express  = require("express");
const app  = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("hello World");
});


module.exports = app;