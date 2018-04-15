var db = require('../models/index.js');
var report_ty = require('../models/report_ty.js');

module.exports.index_get = (req, res, next) => {

  db.report_ty.findAll({
    raw: true
  }).then(freedomlist =>{

    const D3Node = require('d3-node')
    const d3n = new D3Node()      // initializes D3 with container element
    d3n.createSVG(10,20).append('g') // create SVG w/ 'g' tag and width/height
    d3n.svgString()
    return res.render('index', {freedomlist:freedomlist});
  })

}
