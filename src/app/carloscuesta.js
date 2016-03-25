'use strict';

var express = require('express'),
    carloscuesta = express(),
    sassMiddleware = require('node-sass-middleware'),
    routes = require('./routes'),
    compression = require('compression');

carloscuesta.use(compression());

carloscuesta.set('views', __dirname + '/templates');
carloscuesta.set('view engine', 'jade');
carloscuesta.use(sassMiddleware({
    src: __dirname+'/styles',
    dest: __dirname+'/static/css',
    outputStyle: 'compressed'
}));
carloscuesta.disable('etag');

carloscuesta.use(express.static(__dirname +  '/static/', {
    maxAge: 86400000,
    setHeaders: function(res) {
        res.setHeader('Cache-Control', 'public, max-age=86400');
        res.setHeader('Expires', new Date(Date.now() + 86400000).toUTCString());
    }
}));

carloscuesta.use(function (req, res, next) {
	res.setHeader('Cache-Control', 'public, max-age=86400');
    res.setHeader('Expires', new Date(Date.now() + 86400000).toUTCString());
    next();
});

carloscuesta.get('/', routes.index);
carloscuesta.get('/'+process.env.PARAM_CLEAN, routes.cacheClean);

module.exports = carloscuesta;
