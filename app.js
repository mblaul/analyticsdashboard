var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');

var app = express();



app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'pug');



app.use((req, res, next) => {
  var err = new Error('File not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(`there was an error: ${err.message}\n code: ${err.status}`)
});



app.listen(3000, () =>{
  console.log('Express app listening on port 3000')
})
