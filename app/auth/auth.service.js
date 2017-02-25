"use strict";

var soap = require('soap');
var http = require('http');
var xml = require('fs').readFileSync('auth.wsdl', 'utf8');

var service = {
    loginService : {
        loginPort : {
            memorize: function (args) {
                return {
                    formatedText: args.email + " " + args.password
                }
            }
        }
    }
};


var server = http.createServer(function(request,response) {
    response.end("404: Not Found: " + request.url);
});

server.listen(3000);
soap.listen(server, '/auth', service, xml);
