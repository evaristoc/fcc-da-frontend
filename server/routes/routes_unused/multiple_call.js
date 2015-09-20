var gitter = require('./restApi').gitter;
var async = require('async');

var list_roomIds = gitter.roomIds;

var gitter_call = function(g, room, cb){
  var d = g.fetch(g.path(g.roomIds[room]),g.token);
  if (d) {
    cb(room, d);
  }
};

var callback = function(room, data){
    if(data)
        {console.log("Got sucessfully Data from "+room);
        return data;
    }else
    {console.log("No Data from "+room);}
    };
    
module.exports.gitter.data_collector = async.parallel([
                gitter_call(gitter, 'HelpZiplines', cb),
                gitter_call(gitter, 'LetsPair', cb)
               ],
               callback);


