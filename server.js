// var http = require('http')
// var port = process.env.PORT || 1337;
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// }).listen(port);


var Hapi = require('hapi'); 

// Create a new server
var server = new Hapi.Server();


var port = process.env.PORT || 1337;

// Setup the server with a host and port
server.connection({port: port});

server.route({ method: 'GET', path: '/', handler: function(request, reply) { reply('Hello world, Hapi'); } });

server.start(function() { console.log('Hapi is listening to http://localhost:1337'); });


