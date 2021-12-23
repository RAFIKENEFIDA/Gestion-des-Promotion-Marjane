var createError = require('http-errors');
var express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
require('dotenv').config()
const cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
require('./routes/index')(app);
// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



module.exports = app;
