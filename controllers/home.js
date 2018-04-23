var db = require('../models/index.js');

module.exports.index_get = (req, res, next) => {

  db.report_ty.findAll({
      raw: true,
      limit: 10,
      attributes: ['Country','Freedom'],
      order: [['Freedom', 'DESC']]
    }).then(topfreedomindex =>{
      return topfreedomindex;
    });

  db.report_ty.findAll({
      raw: true,
      limit: 10,
      attributes: ['Country','Freedom'],
      order: [['Freedom', 'ASC']]
    }).then(btmfreedomindex =>{
      return btmfreedomindex;
    });

  return res.render('index',  {btmfreedomindex:btmfreedomindex, topfreedomindex:topfreedomindex});
}
