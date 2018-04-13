var request = require('request');
var db = require('../models/index.js');

module.exports.index_get = (req, res, next) => {

  var freedomlist = db.report_ty.prototype.getFreedom();
  console.log(freedomlist);
  res.render('index', {freedomlist : freedomlist});
}
