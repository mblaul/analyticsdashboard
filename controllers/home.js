var db = require('../models/index.js');

module.exports.index_get = (req, res, next) => {

  var topFreedomIndexPromise = db.report_ty.getTopFreedomIndex();
  var btmFreedomIndexPromise = db.report_ty.getBtmFreedomIndex();

  Promise.all([topFreedomIndexPromise, btmFreedomIndexPromise]).then((results)=>{
    console.log(results);
    return res.render('index', {
      topfreedomindex: results[0],
      btmfreedomindex: results[1]
    });
  }).catch((err) => {
    return next(err);
  });
}
