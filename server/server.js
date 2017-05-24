var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var router = require('./routes');

mongoose.connect('mongodb://localhost:27017/user', {}, function () {
  console.log('Connected Database');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);


app.listen(7000, function () {
  console.log('Example app listening on port 3000 !')
});