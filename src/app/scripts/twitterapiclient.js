'use strict';

var ApiClient = require('./apiclient'),
	OAuth = require('oauth');

var TwitterApiClient = (function() {

	var oAuth = new OAuth.OAuth (
		'https://api.twitter.com/oauth/request_token',
		'https://api.twitter.com/oauth/access_token',
		process.env.TWITTER_CONSUMER_KEY,
		process.env.TWITTER_CONSUMER_KEY_SECRET,
		'1.0A',
		null,
		'HMAC-SHA1'
	);

	var _ApiClient = new ApiClient({
		'base_url': 'https://api.twitter.com/1.1',
		'cache': 5,
		'oauth': oAuth,
		'accesToken': process.env.TWITTER_CONSUMER_KEY,
		'accesTokenSecret': process.env.TWITTER_CONSUMER_KEY_SECRET,
	});

	var getOAuthRequestToken = function() {
		oAuth.getOAuthRequestToken(function (error, oauth_token, oauth_token_secret) {
			if (error) {
				console.log(error);
			} else {
				var oauth = {};
				oAuth.token = oauth_token;
				oAuth.token_secret = oauth_token_secret;
				next(oauth);
			}
		});
	};

	var getUserTimeline = function(params) {
		getOAuthRequestToken();
		return _ApiClient.get('statuses/user_timeline', params);
	};

	return {
		getUserTimeline: getUserTimeline
	};

})();

module.exports = TwitterApiClient;
