// var http = require('http')
// var port = process.env.PORT || 1337;
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// }).listen(port);

var Path = require('path');
var Hapi = require('hapi'); 

// Create a new server
var server = new Hapi.Server();


var port = process.env.PORT || 1337;

// Setup the server with a host and port
server.connection({port: port});

server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,
    path: "./views"
});

server.route({ method: 'GET', path: '/', 
	handler: function(request, reply) 
	{ reply('Hello world, Hapi'); } });

server.route({ method: 'GET', path: '/test', 
	handler: function(request, reply)
	{ reply.view("test"); } });

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'content',
            listing: true
        }
    }
});

server.route({
    method: 'GET',
    path: '/content/{param*}',
    handler: {
        directory: {
            path: 'content',
            listing: true
        }
    }
});

server.start(function() { console.log('Hapi is listening to http://localhost:1337'); });


