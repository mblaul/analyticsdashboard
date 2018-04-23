var db = require('../models/index.js');

module.exports.index_get = (req, res, next) => {

  var topFreedomIndexPromise = db.report_ty.getTopFreedomIndex();

  Promise.all([topfreedomindex]).then((results)=>{
    return res.render('index', {topfreedomindex:topfreedomindex});
  }).catch((err) => {
    return next(err);
  })
}
