'use strict';

var express = require('express'),
    carloscuesta = express(),
    sassMiddleware = require('node-sass-middleware'),
    serveStatic = require('serve-static'),
    routes = require('./routes'),
    compression = require('compression');

carloscuesta.use(compression());
carloscuesta.use(serveStatic(__dirname + '/static/img', {maxAge: '1d',}));
carloscuesta.use(serveStatic(__dirname + '/static/js', {maxAge: '1d',}));
carloscuesta.set('views', __dirname + '/templates');
carloscuesta.set('view engine', 'jade');
carloscuesta.use(sassMiddleware({
    src: __dirname+'/styles',
    dest: __dirname+'/static/css',
    outputStyle: 'compressed'
}));
carloscuesta.use(serveStatic(__dirname + '/static/css', {maxAge: '1d',}));

carloscuesta.get('/', routes.index);
carloscuesta.get('/'+process.env.PARAM_CLEAN, routes.cacheClean);

module.exports = carloscuesta;
