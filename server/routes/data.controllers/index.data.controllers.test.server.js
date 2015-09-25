var express = require('express');
var router = express.Router();
var gitter = require('./restApi.data.controller.server').gitter;
var test = require('../../config/test.json');
var async = require('async');
///* GET home page. */
////The callback thing!! The SOLUTION comes attached to the callback function as ARGUMENTS from the FUNCTION that called it ORIGINALLY...
////This is the complication: the values to the arguments to the callback function that will be created later, are assigned THERE, where the callback was called and ran, not HERE
////What it is done instead is like "EXTRACTING" THE CALLBACK OUTSITE THE FUNCTION THAT NEST IT (in this case, the gitter.fetch method)
//router.get('/', function(req, res, next) {
//  gitter.fetch(gitter.path(gitter.roomIds.HelpZiplines), gitter.token, function RenderExpress(err, result){
//  //next();
//  if (err) throw err;
//  console.log('In the router for the data...');
//  res.json([{a:1, b:2}]);
//  //res.render('/', {data1: gitter.path(gitter.roomIds.HelpZiplines), data2: result.id
//  //           //,data3: gitter.multi_fetch(gitter.path, gitter.roomIds, gitter.token)
//  //           });
//  })
//});

//router.get('/', function(req,res,next){res.render('index.html')})
//http://stackoverflow.com/questions/7042340/node-js-error-cant-set-headers-after-they-are-sent
//http://www.pseudobry.com/let-express-js-and-async-js-make-your-life-easier/
//http://stackoverflow.com/questions/24980991/node-asynchronous-route-code
//https://www.safaribooksonline.com/blog/2014/03/10/express-js-middleware-demystified/
//http://www.sitepoint.com/10-tips-make-node-js-web-app-faster/

// async: if Array[object, object] I am passing the CALLS, not the results..
//------  the async callback function will inspect the TASK functions to find the results there!!!
//------ the callback function that is passed is NOT the external one: it is the asyncCallback!!!!

var asyncTasks = []
var arr_rooms = ["HelpZiplines", "HelpBonfires", "LetsPair"]


function sortObject(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) {
        result[key] = obj[key];
        return result;
    }, {});
}


router.get('/', function getDataPar(req,res,next){
  var syncTasks = [];
  arr_rooms.forEach(function testcallingRoomData(room){
    var ordered_test = sortObject(test[room]);
    syncTasks.push(ordered_test);
  });
  res.json(syncTasks);
})

module.exports = router;

