var express = require('express');
var router = express.Router();
var gitter = require('./restApi.data.controller.server').gitter;
// var test = require('../../config/test.json');
var async = require('async');

var asyncTasks = []
var arr_rooms = ["HelpZiplines", "HelpBonfires", "LetsPair"]

arr_rooms.forEach(function callingRoomData(room) {
  asyncTasks.push(function(callback) {
    gitter.fetch(gitter.path(gitter.roomIds[room]), gitter.token, function RenderExpress(err, result) {
      //if (err) throw err;
      if (err) {
        console.log("error at ", room);
      }
      console.log('In the router for data from ', room);
      var result_mapred = result.map(function select(elem) {
          return {
            sent: elem.sent.slice(0, 10),
            hum: (elem.fromUser.username != 'camperbot') ? 1 : 0,
            bot: (elem.fromUser.username != 'camperbot') ? 0 : 1
          };
        })
        .reduce(function sumelem(obj, currobj) {
          var date = currobj.sent;
          if (!obj[date]) {
            obj[date] = {
              hum: 0,
              bot: 0
            };
          };
          obj[date].hum += currobj.hum;
          obj[date].bot += currobj.bot;
          return obj;
        }, {});

      callback(err, result_mapred);

    })
  })
})

router.get('/', function getDataPar(req, res, next) {
  //res.json([{a:1, b:2}]);
  async.parallel(

    asyncTasks,
    function asyncCallback(err, results) {
      if (err) throw err;
      //res.json([{e:5,f:6}]);
      console.log("all is correct!");
      res.json(results);
    }
  );
});

module.exports = router;
