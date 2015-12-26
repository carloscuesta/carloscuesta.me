'use strict';

if (process.env.NODE_ENV === 'development') {
	require('dotenv').load();
}

var GithubApiClient = require('./scripts/githubapiclient'),
	TwitterApiClient = require('./scripts/twitterapiclient'),
	cache = require('memory-cache'),
	staticData = require('./data/staticdata');

exports.index = function(req, res) {
	res.setHeader('Cache-Control', 'public, max-age=86400');

	var ghUserCCStars = GithubApiClient.getSearch({
		q: 'user:carloscuesta',
		sort: 'stars',
		order: 'desc',
		access_token: process.env.GITHUB_TOKEN,
		per_page: 6
	});

	var userTimeline = TwitterApiClient.getUserTimeline({
		screen_name: 'crloscuesta',
		count: 4
	});

	Promise.all([ghUserCCStars, userTimeline]).then(function(data) {
		res.render('views/index', {
			githubData: data[0],
			twitterData: data[1],
			me: staticData.me,
			site: staticData.site,
			social: staticData.social
		});
	});
};

exports.cacheClean = function(req, res) {
	cache.clear();
	console.log('\tcache cleaned from URL');
	res.redirect('/');
};

exports.notFound = function(req, res) {
	res.status(404);
	res.render('views/errors/404.jade');
};
