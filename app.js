var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');
const Sequelize = require('sequelize');

var app = express();

const sequelize = new Sequelize('worldhappiness', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  operatorAliases: false
});

sequelize.query('SELECT * FROM `2017`').then(rows => {
  console.log(rows)
});

//Set static directory to /public
app.use('/static', express.static(__dirname + '/public'));

//Use pug files for templates/views
app.set('view engine', 'pug');


app.use(require('./routes'));

//Error handling
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
