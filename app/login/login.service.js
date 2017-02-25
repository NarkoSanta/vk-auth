"use strict";

var soap = require ('soap');
var http = require('http');
var xml = require('fs').readFileSync('login.wsdl', 'utf8');
