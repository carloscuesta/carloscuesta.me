'use strict';

var express = require('express'),
    carloscuesta = express(),
    sassMiddleware = require('node-sass-middleware'),
    routes = require('./routes');

carloscuesta.set('views', __dirname + '/templates');
carloscuesta.set('view engine', 'jade');
carloscuesta.engine('jade', require('jade').__express);
carloscuesta.use(sassMiddleware({
    src: __dirname+'/styles',
    dest: __dirname+'/styles/css',
    debug: true,
    outputStyle: 'compressed'
}));
carloscuesta.use(express.static(__dirname+'/styles/css'));

carloscuesta.get('/', routes.index);

module.exports = carloscuesta;
