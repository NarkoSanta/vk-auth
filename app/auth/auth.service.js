"use strict";

var soap = require('soap');
var http = require('http');
var xml = require('fs').readFileSync('auth.wsdl', 'utf8');

var service = {
    MyPromiseService : {
        promisePort : {
            memorize: function (args) {
                if (args.email == "test@gmail.com" && args.password == "slaptazodis"){
                  return {
                    formatedText: "You are signed in using email: " + args.email + " using password: " + args.password
                }
                }
                else {
                  return {
                    formatedText: "Wrong username or password"
                  }
                }
            }

/*            MyAsyncFunction: function(args, callback){
              callback({
                email: args.email
              });
            },

            HeadersAwareFunction: function(args, cb, headers) {
              return {
                email: headers.Token
              };
            },

            reallyDetailedFunction: function(args, cb, headers, req){
              console.log('SOAP `reallyDetailedFunction` request from ' + req.connection.remoteAddress);
              return{
                email: headers.Token
              };*/
            }
        }
    };


var server = http.createServer(function(request,response) {
    response.end("404: Not Found: " + request.url);
});

server.listen(8001);
soap.listen(server, '/auth', service, xml);
