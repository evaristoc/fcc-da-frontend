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



//router.get('/', function getDataPar(req, res, next){
//  //res.json([{a:1, b:2}]);
//      gitter.fetch(gitter.path(gitter.roomIds.HelpZiplines), gitter.token, function RenderExpress(err, result){
//        //next();
//        if (err) throw err;
//        console.log('In the router for the data 1...');
//        //res.json([{a:1, b:2}]);
//        //res.render('/', {data1: gitter.path(gitter.roomIds.HelpZiplines), data2: result.id
//        //           //,data3: gitter.multi_fetch(gitter.path, gitter.roomIds, gitter.token)
//        //           });
//        gitter.fetch(gitter.path(gitter.roomIds.LetsPair), gitter.token, function RenderExpress(err, result){
//          //next();
//          if (err) throw err;
//          console.log('In the router for the data 2...');
//          //res.json([{c:3, d:4}]);
//          //res.render('/', {data1: gitter.path(gitter.roomIds.HelpZiplines), data2: result.id
//          //           //,data3: gitter.multi_fetch(gitter.path, gitter.roomIds, gitter.token)
//          //           });
//
//          res.json([{e:5,f:6}]);
//        });
//      });
//});


//router.get('/', function getDataPar(req, res, next){
//  //res.json([{a:1, b:2}]);
//      var results = {}, count = 0;
//      gitter.fetch(gitter.path(gitter.roomIds.HelpZiplines), gitter.token, function RenderExpress(err, result){
//        //next();
//        if (err) throw err;
//        console.log('In the router for the data 1...');
//        //res.json([{a:1, b:2}]);
//        results['ro'] = {a:1, b:2}; 
//        if(++count == 2) { // 2 calls in this case
//          console.log('-------------------yeiii we are done, do something here like send the date back to the client-----------------------');
//          //console.log(results);
//          res.json([results]);
//        }
//      });
//      gitter.fetch(gitter.path(gitter.roomIds.LetsPair), gitter.token, function RenderExpress(err, result){
//          //next();
//        if (err) throw err;
//        console.log('In the router for the data 2...');
//        results['co'] = {c:3, d:4}; 
//        if(++count == 2) { // 2 calls in this case
//          console.log('-------------------yeiii we are done, do something here like send the date back to the client-----------------------');
//          //console.log(results);
//          res.json([results]);
//        }
//      });
//});


//var callback = function(){
//  console.log("inside the callback of the parallel function");
//}

//var callback = function(err, result){
//  if (err) throw err;
//  console.log("inside the callback of the parallel function");
//}
//
//var callback = function(result){
//  console.log("inside the callback of the parallel function");
//}

// async: if Array[object, object] I am passing the CALLS, not the results..
//------  the async callback function will inspect the TASK functions to find the results there!!!
//------ the callback function that is passed is NOT the external one: it is the asyncCallback!!!!

router.get('/', function getDataPar(req, res, next){
  //res.json([{a:1, b:2}]);
  async.parallel([
    function(callback){
      gitter.fetch(gitter.path(gitter.roomIds.HelpZiplines), gitter.token, function RenderExpress(err, result){
        //next();
        if (err) throw err;
        console.log('In the router for the data 1...');
        var result_map = result.map(function select(elem){return {sent:elem.sent.slice(0,10), hum: (elem.fromUser.username != 'camperbot')? 1 : 0, bot: (elem.fromUser.username != 'camperbot')? 0 : 1};})
        //var result_mapred = {'0000-00-00':[0,0]};
        console.log(result_map);
        
        var result_mapred = result_map.reduce(function (obj, currObj) {
          var date = currObj.sent;
          if(!obj[date]) {
            obj[date] = {
              hum: 0,
              bot: 0
            };
          }

        obj[date].hum += currObj.hum;
        obj[date].bot += currObj.bot;
        return obj;
        }, []);
        ////console.log(Object.keys(result_mapred))
        //for(var i = 0; i < result_map.length; i++){
        //  if (!(result_map[i]['sent'] in Object.keys(result_mapred))) {
        //    result_mapred[result_map[i]['sent']] = {hum:0,bot:0};
        //  }
        //  if (result_mapred.hasOwnProperty(result_map[i]['sent'])) {
        //    ++result_mapred[result_map[i]['sent']].hum.value;
        //    console.log(result_mapred[result_map[i]['sent']].hum);
        //  }
          //console.log(result_map[i]['sent'], typeof result_map[i]['sent'], Object.keys(result_mapred)[k], typeof Object.keys(result_mapred)[k], result_map[i]['sent'] == Object.keys(result_mapred)[k]);
          //for (var k = 0; k < Object.keys(result_mapred).length; k++){
          //  console.log(result_map[i]['sent'], typeof result_map[i]['sent'], Object.keys(result_mapred)[k], typeof Object.keys(result_mapred)[k], result_map[i]['sent'] == Object.keys(result_mapred)[k]);
          //  if (result_map[i]['sent'] == Object.keys(result_mapred)[k]) {
          //    if (result_map[i]['hum'] == 1) {
          //      console.log(result_mapred[result_map[i]['sent']][0]);
          //      result_mapred[result_map[i].sent].hum = parseInt(result_mapred[result_map[i].sent].hum) + 1;
          //    }
          //  
          //      //result_mapred[result_map[i]['sent']][0] = result_mapred[result_map[i]['sent']][0] + result_map[i]['hum'];
          //      result_mapred[result_map[i]['sent']][1] = result_mapred[result_map[i]['sent']][1] + result_map[i]['bot'];
          //      console.log(result_mapred[result_map[i]['sent']])
          ////    }else if (k == (Object.keys(result_mapred).length-1)){
          ////      result_mapred[result_map[i]['sent']] = [0,0];
          // }
          //}
        //}  
          //if (!(result_map[i]['sent'] in Object.keys(result_mapred))) {
          //  result_mapred[result_map[i]['sent']] = [0,0];
          //console.log(result_map[i]['sent'], result_map[i]['sent'] in Object.keys(result_mapred))
          //console.log(Object.keys(result_mapred))

          //};
        //};
        
        //var result_map = result;
        //console.log(typeof result, result.length);
        //console.log(result_mapred);
        callback(err, result_mapred);
        //callback(err, result);
        //res.json([{a:1, b:2}]);
        //res.render('/', {data1: gitter.path(gitter.roomIds.HelpZiplines), data2: result.id
        //           //,data3: gitter.multi_fetch(gitter.path, gitter.roomIds, gitter.token)
        //           });
      })
    },
    function(callback){
      gitter.fetch(gitter.path(gitter.roomIds.LetsPair), gitter.token, function RenderExpress(err, result){
        //next();
        if (err) throw err;
        console.log('In the router for the data 2...');
        var result_map = result.map(function select(elem){return {sent:elem.sent.slice(0,10), hum: (elem.fromUser.username != 'camperbot')? 1 : 0, bot: (elem.fromUser.username != 'camperbot')? 0 : 1};})
        var result_mapred = {};
        //console.log(Object.keys(result_mapred))
        for(var i = 0; i < result_map.length; i++){
          if (!(result_map[i]['sent'] in Object.keys(result_mapred))) {
            result_mapred[result_map[i]['sent']] = [0,0];
          };
          result_mapred[result_map[i]['sent']][0] = result_mapred[result_map[i]['sent']][0] + result_map[i]['hum'];
          result_mapred[result_map[i]['sent']][1] = result_mapred[result_map[i]['sent']][1] + result_map[i]['bot'];
          };
        
        //var result_map = result;
        //console.log(typeof result, result.length);
        //console.log(result_mapred);
        callback(err, result_mapred);
        //callback(err, result);
        //res.json([{c:3, d:4}]);
        //res.render('/', {data1: gitter.path(gitter.roomIds.HelpZiplines), data2: result.id
        //           //,data3: gitter.multi_fetch(gitter.path, gitter.roomIds, gitter.token)
        //           });
      })
    }
    ],
    function asyncCallback(err, results){
      if (err) throw err;
      //res.json([{e:5,f:6}]);
      
      res.json(results);
    }
  );
});



module.exports = router;
