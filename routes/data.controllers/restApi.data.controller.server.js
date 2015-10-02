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
    }
}


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
    }

}



module.exports.gitter = gitter;
