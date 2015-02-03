var Path = require('path');
var Hapi = require('hapi'); 

// Create a new server
var server = new Hapi.Server();

//Need this to host on Azure
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

server.route({ method: 'GET', path: '/hello', 
	handler: function(request, reply) 
	{ reply('Hello world, Hapi'); } });

server.route({ method: 'GET', path: '/', 
	handler: function(request, reply)
	{ reply.view("test"); } });


//Route all the content files
server.route({
    method: 'GET',
    path: '/content/{param*}',
    handler: {
        directory: {
            path: 'content',
            listing: false
        }
    }
});

server.start(function() { console.log('Hapi is listening to http://localhost:1337'); });


