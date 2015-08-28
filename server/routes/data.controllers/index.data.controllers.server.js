var express = require('express');
var router = express.Router();
//var ap = require('./restApi');
var gitter = require('./restApi.data.controller.server').gitter;

/* GET home page. */
//The callback thing!! The SOLUTION comes attached to the callback function as ARGUMENTS from the FUNCTION that called it ORIGINALLY...
//This is the complication: the values to the arguments to the callback function that will be created later, are assigned THERE, where the callback was called and ran, not HERE
//What it is done instead is like "EXTRACTING" THE CALLBACK OUTSITE THE FUNCTION THAT NEST IT (in this case, the gitter.fetch method)
router.get('/', function(req, res, next) {
  gitter.fetch(gitter.path(gitter.roomIds.HelpZiplines), gitter.token, function RenderExpress(err, result){
  //next();
  if (err) throw err;
  console.log(result);
  res.render('index', { title: 'Express', data1: gitter.path(gitter.roomIds.HelpZiplines), data2: result.id
             //,data3: gitter.multi_fetch(gitter.path, gitter.roomIds, gitter.token)
             });
  })
});
//
//router.get('/', function(req, res, next) {
//  gitter.multi_fetch(gitter.path, gitter.roomIds, gitter.token);
//  var data = 'xxx';
//  res.render('index', {data3:data});});

module.exports = router;
