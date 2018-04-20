var db = require('../models/index.js');
var d3 = require('d3');

module.exports.index_get = (req, res, next) => {

  db.report_ty.findAll({
    raw: true,
    attributes: ['Country','Freedom']
  }).then(freedomlist =>{
    return res.render('index', {freedomlist:freedomlist});
  })

  // return res.render('index',  {d3n:d3n});
}
