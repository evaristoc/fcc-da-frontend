"use strict";

var AppConfig = require("../config/AppConfig");

var gitterHost = process.env.HOST || 'https://gitter.im';

var _ = require("underscore");
var request = require('request');

function handleCallback(err, res) {
    if (err) {
        console.error("ERROR \n");
        // console.error(res);
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
    
    path: function(roomIds){return '/api/v1/rooms/' + roomIds.HelpZiplines + '/chatMessages?limit=80000'},
    
    roomIds: AppConfig.roomids,
    
    fetch: function(path, token, opts) {
        
        token = token || AppConfig.token;
        
        var options = {
            url: gitterHost + path,
            //timeout:10000,
            //followRedirect:true,
            //maxRedirects:100,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        };

        opts = opts || {};
        /* underscore will allow to transverse the two objects and add properties 
        if they don't exist or override the value if it does in the second object (opts)
        it is an union operation, with priority to the values at opts when duplicate attributes 
        */
        _.extend(options, opts); // opts takes priority
        //console.log('fetch.options\n', options)
        // trying to figure out what exacty the extra options apply to.
        // request seems to be doing the work of handling the transaction
        // it is closer to the following http://stackoverflow.com/questions/9577611/http-get-request-in-node-js-express

        request(options, function(err, req_res, req_body) {
            //if (err) return err;

            if (req_res.statusCode === 200) {
                return typeof req_body;
            } else {
                return 'err ' + req_res.statusCode;
            }
        });
    }
}



module.exports = gitter;