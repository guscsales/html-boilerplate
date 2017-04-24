var express = require('express');
var app = express();

app.get('/', express.static(__dirname + '/'));

app.use('/assets', express.static('assets'));
app.use('/node_modules', express.static('node_modules'));


app.listen(5001, function () {
  console.log('Running on localhost:5001')
});