
var http = require('http');
var fs = require('fs');

const port  = 8080;

http.createServer(function (req, res) {

    var index = fs.readFileSync('./web/index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);

}).listen(port);

console.log("Web server started on port", port);
