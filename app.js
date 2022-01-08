
process.env.NODE_CONFIG_DIR       = 'config/';
config                            = require('config');

var app                         = require('express')();
global.app                      = app;

// require('./middlewares');
// require('./swagger').initialize();
require('./modules');

require('./services/startupService').initializeServer();
