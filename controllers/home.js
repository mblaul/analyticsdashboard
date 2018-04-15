var db = require('../models/index.js');
var report_ty = require('../models/report_ty.js');

module.exports.index_get = (req, res, next) => {

  db.report_ty.findAll({
    raw: true
  }).then(freedomlist =>{
    return res.render('index', {freedomlist:freedomlist});
  })

}
