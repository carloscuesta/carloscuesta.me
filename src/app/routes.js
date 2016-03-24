'use strict';

if (process.env.NODE_ENV === 'development') {
	require('dotenv').load();
}

var GithubApiClient = require('./scripts/githubapiclient'),
	TwitterApiClient = require('./scripts/twitterapiclient'),
	GhostApiClient = require('./scripts/ghostapiclient'),
	cache = require('memory-cache'),
	staticData = require('./data/staticdata');

exports.index = function(req, res) {
	res.header('Cache-Control', 'public, max-age=86400');

	var ghUserCCStars = GithubApiClient.getSearch({
		q: 'user:carloscuesta',
		sort: 'stars',
		order: 'desc',
		access_token: process.env.GITHUB_TOKEN,
		per_page: 6
	});

	var userTimeline = TwitterApiClient.getUserTimeline({
		screen_name: 'crloscuesta',
		count: 4,
		exclude_replies: false,
		include_rts: true
	});

	var lastPosts = GhostApiClient.getLastPosts({
		client_id: process.env.GHOST_CLIENT_ID,
		client_secret: process.env.GHOST_CLIENT_SECRET,
		limit: 2,
		include: 'tags'
	});

	Promise.all([ghUserCCStars, userTimeline, lastPosts]).then(function(data) {
		var repos = GithubApiClient.parseRepos(data[0]);
		var tweets = TwitterApiClient.parseTweets(data[1]);
		var posts = GhostApiClient.parsePosts(data[2]);

		res.render('views/index', {
			githubData: repos,
			twitterData: tweets,
			ghostData: posts,
			me: staticData.me,
			site: staticData.site,
			social: staticData.social,
			cache: true
		});
	});
};

exports.cacheClean = function(req, res) {
	cache.clear();
	console.log('\tcache cleaned from URL');
	res.redirect('/');
};
