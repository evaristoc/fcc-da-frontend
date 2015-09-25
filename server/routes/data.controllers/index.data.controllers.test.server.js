var express = require('express');
var router = express.Router();
var gitter = require('./restApi.data.controller.server').gitter;
var test = require('../../config/test.json');
var async = require('async');

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

