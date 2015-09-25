"use strict";
var async = require('async');
var AppConfig = require("../../config/AppConfig");
//var test = require(xxxx);
var gitterHost = process.env.HOST || "https://gitter.im";

//var _ = require("underscore");
var request = require("request");

function handleCallback(err, res) {
    if (err) {
        console.error("ERROR \n");
        // console.error(res);
    }
}

//TIMERS
console.time("fetch function");

/* Gitter API client helper :

An object composed by:
-- token; 
-- user (id); 
-- fetch (method, arguments are path (), token, cb (=callback function), opts); 
---- builds options of get request:
------ url (gitterHost+path)
------ headers (the usual plus token)

*/
var gitter = {
    
    //path: function(roomIds){return '/api/v1/rooms/' + roomIds.HelpZiplines + '/chatMessages?limit=80000'},
    path: function(roomId){return '/api/v1/rooms/' + roomId + '/chatMessages?limit=80000'},
    
    roomIds: AppConfig.roomids,
    
    stashToken: function(token) {
        // test
        if (token) {
            AppConfig.token = token;
        } else {
            console.error("tried to stash null token:", token);
        }
        console.log("stashToken AppConfig:", AppConfig.token);
        token = token || AppConfig.token;
        return (token);
    },
    
    //The CALLBACK THING...
    //I am adding a REFERENCE TO cb (callback) that will be created *****LATER****
    //I am also assigning it THE VALUES TO THE ARGUMENTS *****HERE*****!!!! (see below)
    //I will "re-extract" the REFERENCE, but WITH THE VALUES TO THE ARGUMENTS *****LATER*****!!!
    fetch: function(path, token, cb) {
        
        token = token || AppConfig.token;
        var opts = opts || {};
        var url = gitterHost + path;
        var options = {
            //timeout:10000,
            //followRedirect:true,
            //maxRedirects:100,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        };

        //opts = opts || {};
        /* underscore will allow to transverse the two objects and add properties 
        if they don't exist or override the value if it does in the second object (opts)
        it is an union operation, with priority to the values at opts when duplicate attributes 
        */
        //_.extend(options, opts); // opts takes priority
        //console.log('fetch.options\n', options)
        // trying to figure out what exacty the extra options apply to.
        // request seems to be doing the work of handling the transaction
        // it is closer to the following http://stackoverflow.com/questions/9577611/http-get-request-in-node-js-express

        request(url, options, function(err, req_res, req_body) {
            if (err) throw err;
            //biancamihai
            if (req_res.statusCode === 200) {
                cb(null, JSON.parse(req_body));
            }
        });
    },
    
    //test: test
    
    //multi_fetch: function(path, roomIds, token){
    //    
    //    var gitter_call = function(cb){
    //    
    //        token = token || AppConfig.token;
    //        var opts = opts || {};
    //        var url = gitterHost + path(roomIds.HelpZiplines);
    //        var options = {
    //            //timeout:10000,
    //            //followRedirect:true,
    //            //maxRedirects:100,
    //            headers: {
    //                'Content-Type': 'application/json',
    //                'Accept': 'application/json',
    //                'Authorization': 'Bearer ' + token
    //            }
    //        };
    //        //console.log(url);
    //        return request(url, options, function(err, req_res, req_body) {
    //            //if (err) return err;
    //            //return err, req_res;
    //            if (req_res.statusCode === 200) {
    //                //console.log(req_body);
    //                console.log("Data from example successfully downloaded!");
    //                console.timeEnd("fetch function");
    //                //return ('fetch is working!');
    //                console.log(JSON.parse(req_body)[0]);
    //                cb(null, JSON.parse(req_body)[0]);
    //                //cb(null, JSON.parse(req_body));
    //                //return req_body;
    //            } else {
    //                //return err;
    //                cb(err, req_res.statusCode);
    //            }
    //        });
    //    };
    //    
    //    var data = [];
    //    var cb = function(err, d){if(err) throw err; data.push(d)};
    //   
    //    async.parallel([
    //            gitter_call(cb),
    //            gitter_call(cb)
    //           ],
    //           function(err, data){
    //                if (!err) {
    //                    console.log("here is the data ",data);
    //                }else{
    //                    console.log("this is an error ", err);
    //                }
    //                
    //           });
    //
    //}

}



module.exports.gitter = gitter;

////http://stackoverflow.com/questions/20186081/understanding-node-js-async-parallel    
//    multi_fetch: function(fetch, path, roomIds, token){
//        ////defining functions and callback for the async
//        //
//        //var func_arr = [];
//        //
//        //var rooms = ['HelpZiplines', 'LetsPair']
//        //
//        //for(var r =0; r < 2; r++){
//        //    console.log('a room ',rooms[r]);
//        //    var gitter_call = function(cb){
//        //    //console.log(d);
//        //    fetch(path(roomIds[rooms[r]]),token);
//        //    };
//        //    func_arr.push(gitter_call);
//        //}
//        //
//        //async.parallel(func_arr,
//        //       function(err, result){
//        //        if (!err) {
//        //        console.log("results: ", result);
//        //        }}); 
//        
//        var gitter_call = function(room, cb){
//        //console.log(d);
//        fetch(path(roomIds[room]),token, cb);
//        };
//        
//        var callback = function(err, data){
//            console.log("here is the data ",data);    
//            //if(data == 'fetch is working!')
//            //    //{console.log("Got sucessfully Data from "+room);
//            //    {console.log("Got sucessfully Data from "+data[0]);
//            //    //return data;
//            //}else
//            //{console.log("No Data from "+room);}
//        };
//        
//        var func_arr = [
//                gitter_call('HelpZiplines', callback),
//                gitter_call('LetsPair', callback)
//               ];
//        
//        
//        
//        return async.parallel(func_arr,
//               callback);
//    
//    },