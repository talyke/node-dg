'use strict';
var http = require('http');
//var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
//