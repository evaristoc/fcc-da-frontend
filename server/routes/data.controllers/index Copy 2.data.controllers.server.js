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
        //console.log(result_map);
        //thanks to abhisekp...
        var result_mapred = result_map.reduce(function sumelem(obj, currObj) {
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
        }, {});
        
        //console.log(result_mapred);
        //var finalresult = [];
        //console.log(Object.keys(result_mapred))
        //var k_objects =  Object.keys(result_mapred);
        //for (var k = 0; k < k_objects.length; k++){
        //  if (Object.prototype.hasOwnProperty.call(result_mapred, k_objects[k])) {
        //    console.log(Object.prototype.hasOwnProperty.call(result_mapred, k_objects[k]))
        //    console.log({day:k_objects[k], hum:result_mapred[k_objects[k]].hum, bot:result_mapred[k_objects[k]].bot})
        //    finalresult.push({day:k_objects[k], hum:result_mapred[k_objects[k]].hum, bot:result_mapred[k_objects[k]].bot})
        //  }
        //}
        //
        ////for (k in Object.keys(result_mapred)){
        ////  //console.log(Object.prototype.hasOwnProperty.call(result_mapred, k))
        ////  //if (Object.prototype.hasOwnProperty.call(result_mapred, k)) {
        ////    console.log({day:k, hum:result_mapred[k].hum, bot:result_mapred[k].bot})
        ////    finalresult.push({day:k, hum:result_mapred[k].hum, bot:result_mapred[k].bot})
        ////  //}
        ////}
        //
        //console.log(finalresult);
        
        callback(err, result_mapred);
        //callback(err, result);
        //res.json([{a:1, b:2}]);
      })
    }
    //,
    //function(callback){
    //  gitter.fetch(gitter.path(gitter.roomIds.LetsPair), gitter.token, function RenderExpress(err, result){
    //    //next();
    //    if (err) throw err;
    //    console.log('In the router for the data 2...');
    //    var result_map = result.map(function select(elem){return {sent:elem.sent.slice(0,10), hum: (elem.fromUser.username != 'camperbot')? 1 : 0, bot: (elem.fromUser.username != 'camperbot')? 0 : 1};})
    //    
    //    //thanks to abhisekp...
    //    var result_mapred = result_map.reduce(function (obj, currObj) {
    //      var date = currObj.sent;
    //      if(!obj[date]) {
    //        obj[date] = {
    //          hum: 0,
    //          bot: 0
    //        };
    //      }
    //
    //    obj[date].hum += currObj.hum;
    //    obj[date].bot += currObj.bot;
    //    return obj;
    //    }, []);
    //    callback(err, result_mapred);
    //
    //  })
    //}
    ],
    function asyncCallback(err, results){
      if (err) throw err;
      //res.json([{e:5,f:6}]);
      console.log(results);
      res.json(results);
    }
  );
});



module.exports = router;
