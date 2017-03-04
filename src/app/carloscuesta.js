'use strict';

const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const compression = require('compression');
const routes = require('./routes');

const carloscuesta = express();

carloscuesta.use(compression());

carloscuesta.set('views', `${__dirname}/templates`);
carloscuesta.set('view engine', 'pug');
carloscuesta.set('view cache', true);

carloscuesta.use(sassMiddleware({
	src: `${__dirname}/styles`,
	dest: `${__dirname}/static/css`,
	outputStyle: 'compressed'
}));

carloscuesta.use(express.static(`${__dirname}/static/`));
carloscuesta.use(express.static(`${__dirname}/static/css/`));
carloscuesta.use(express.static(`${__dirname}/static/js/`));

carloscuesta.get('/', routes.index);
carloscuesta.get('/about', routes.about);
carloscuesta.get(`/${process.env.PARAM_CLEAN}`, routes.cacheClean);

carloscuesta.use((error, req, res) => {
	res.status(500);
	res.render('views/errors/500', {error: error});
});

module.exports = carloscuesta;
