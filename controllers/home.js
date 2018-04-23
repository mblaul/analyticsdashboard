var db = require('../models/index.js');

module.exports.index_get = (req, res, next) => {

  var topFreedomIndexPromise = db.report_ty.prototype.getTopFreedomIndex();

  console.log(typeof topFreedomIndexPromise);
// db.report_ty.prototype.getTopFreedomIndex();

  Promise.all([topFreedomIndexPromise]).then((results)=>{
    return res.render('index', {topfreedomindex:topfreedomindex});
  }).catch((err) => {
    return next(err);
  })


  // db.report_ty.findAll({
  //     raw: true,
  //     limit: 10,
  //     attributes: ['Country','Freedom'],
  //     order: [['Freedom', 'ASC']]
  //   }).then(btmfreedomindex => {
  //     return btmfreedomindex;
  //   });

  // return res.render('index');
}
