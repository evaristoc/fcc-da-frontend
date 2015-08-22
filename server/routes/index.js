var express = require('express');
var router = express.Router();

var gitter = require('./restApi').gitter;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  gitter.fetch()
});

module.exports = router;
