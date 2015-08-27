var express = require('express');
var router = express.Router();
//var ap = require('./restApi');
var gitter = require('./restApi').gitter;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
             data1: gitter.path(gitter.roomIds.HelpZiplines)
             ,data2: typeof gitter.fetch(gitter.path(gitter.roomIds.HelpZiplines), gitter.token)
             //,data3: gitter.multi_fetch(gitter.path, gitter.roomIds, gitter.token)
             }
             );
});
//
//router.get('/', function(req, res, next) {
//  gitter.multi_fetch(gitter.path, gitter.roomIds, gitter.token);
//  var data = 'xxx';
//  res.render('index', {data3:data});});

module.exports = router;
