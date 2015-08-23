var express = require('express');
var router = express.Router();
//var ap = require('./restApi');
var gitter = require('./restApi').gitter;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
             data1: gitter.path(gitter.roomIds),
             data2: gitter.fetch(gitter.path(gitter.roomIds), gitter.token)
             });
});

module.exports = router;
