var request = require('request');

module.exports.index_get = (req, res, next) => {
  res.render('index');
}
