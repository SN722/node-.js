var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end("here we go............!!!");
}).listen(8080);   