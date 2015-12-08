'use strict';

require('dotenv').load();

var GithubApiClient = require('./scripts/githubapiclient'),
	cache = require('memory-cache'),
	staticData = require('./scripts/staticdata');

exports.index = function(req, res) {
    var ghUserCCStars = GithubApiClient.getSearch({
		q: 'user:carloscuesta',
		sort: 'stars',
		order: 'desc',
		access_token: process.env.GITHUB_TOKEN,
		per_page: 6
	});

    Promise.all([ghUserCCStars]).then(function(data) {
        res.render('index', {
            githubData: data[0],
            name: staticData.me.name,
            title: staticData.site.title
        });
    });
};

exports.cacheClean = function(req, res) {
	cache.clear();
	console.log('  cache cleaned from URL');
	res.redirect('/');
};

exports.notFound = function(req, res) {
	res.redirect('/');
}
