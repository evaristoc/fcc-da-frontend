var express = require('express');
var router = express.Router();
//var ap = require('./restApi');
var gitter = require('./restApi.data.controller.server').gitter;
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

//var callbackIngitter = function(err, result){
//    if (err) throw err; 
//    console.log('hereee!');
//  }
//
//router.get('/', function getDataPar(req, res, next){
//  //res.json([{a:1, b:2}]);
//  async.parallel([
//      function(callbackIngitter){
//          gitter.fetch(gitter.path(gitter.roomIds.HelpZiplines), gitter.token, callbackIngitter(err, result))
//      }
//      ,
//      function(callbackIngitter){
//          gitter.fetch(gitter.path(gitter.roomIds.HelpZiplines), gitter.token, callbackIngitter(err, result))
//      }
//      
//    ],
//    function asyncCallback(err, results){
//      if (err) throw err;
//      res.json([{e:5,f:6}]);
//    }
//  );
//});




//router.get('/', function getDataPar(req, res, next){
//  //res.json([{a:1, b:2}]);
//  async.parallel([
//      gitter.fetch(gitter.path(gitter.roomIds.HelpZiplines), gitter.token, function RenderExpress(err, result){
//        //next();
//        if (err) throw err;
//        console.log('In the router for the data 1...');
//        //res.json([{a:1, b:2}]);
//        //res.render('/', {data1: gitter.path(gitter.roomIds.HelpZiplines), data2: result.id
//        //           //,data3: gitter.multi_fetch(gitter.path, gitter.roomIds, gitter.token)
//        //           });
//    }),
//      gitter.fetch(gitter.path(gitter.roomIds.LetsPair), gitter.token, function RenderExpress(err, result){
//        //next();
//        if (err) throw err;
//        console.log('In the router for the data 2...');
//        //res.json([{c:3, d:4}]);
//        //res.render('/', {data1: gitter.path(gitter.roomIds.HelpZiplines), data2: result.id
//        //           //,data3: gitter.multi_fetch(gitter.path, gitter.roomIds, gitter.token)
//        //           });
//    })
//    ],
//    function asyncCallback(err, results){
//      if (err) throw err;
//      res.json([{e:5,f:6}]);
//    }
//  );
//});

//router.get('/', function(req, res, next) {
//  gitter.multi_fetch(gitter.path, gitter.roomIds, gitter.token);
//  var data = 'xxx';
//  res.render('index', {data3:data});});



router.get('/', function getDataPar(req, res, next){
  //res.json([{a:1, b:2}]);
      gitter.fetch(gitter.path(gitter.roomIds.HelpZiplines), gitter.token, function RenderExpress(err, result){
        //next();
        if (err) throw err;
        console.log('In the router for the data 1...');
        //res.json([{a:1, b:2}]);
        //res.render('/', {data1: gitter.path(gitter.roomIds.HelpZiplines), data2: result.id
        //           //,data3: gitter.multi_fetch(gitter.path, gitter.roomIds, gitter.token)
        //           });
        gitter.fetch(gitter.path(gitter.roomIds.LetsPair), gitter.token, function RenderExpress(err, result){
          //next();
          if (err) throw err;
          console.log('In the router for the data 2...');
          //res.json([{c:3, d:4}]);
          //res.render('/', {data1: gitter.path(gitter.roomIds.HelpZiplines), data2: result.id
          //           //,data3: gitter.multi_fetch(gitter.path, gitter.roomIds, gitter.token)
          //           });

          res.json([{e:5,f:6}]);
        });
      });
});



module.exports = router;
