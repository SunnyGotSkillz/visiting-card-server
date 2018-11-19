const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const http = require('http').Server(server);

// Loading variables from .env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

// Routes
const api = require('./views/api.js');


server.use(bodyParser.urlencoded({ extended: false }));
server.use('/', express.static(__dirname + '/public/'));
server.use('/node_modules', express.static(__dirname + '/node_modules/'));
server.use('/api', api);


var port = process.env.PORT || 4000;
http.listen(port, () => {
	console.log('Listening on port ' + port);
});

