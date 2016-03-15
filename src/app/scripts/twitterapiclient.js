'use strict';

require('dotenv').load();

var ApiClient = require('./apiclient'),
	twitterParse = require('twitter-text'),
	CacheApiClient = require('./cache'),
	nodeCache = require('memory-cache');

var TwitterApiClient = (function() {

	var _ApiClient = new ApiClient({
		base_url: 'https://api.twitter.com/1.1',
		oauth: {
			request_token: 'https://api.twitter.com/oauth/request_token',
			access_token: 'https://api.twitter.com/oauth/access_token',
			consumer_key: process.env.TWITTER_CONSUMER_KEY,
			consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
			access_token: process.env.TWITTER_ACCES_TOKEN,
			access_token_secret: process.env.TWITTER_ACCES_TOKEN_SECRET,
		},
		debug: false
	});

	var getUserTimeline = function(params) {
		return CacheApiClient.validate.call(_ApiClient,'/statuses/user_timeline.json', params);
	};

	var parseTweets = function(tweets) {
		var _cacheTime =  86400000,
			_dataCache = nodeCache.get('parsedTweets');

		if (!_dataCache) {
			var twits = tweets.map(function(tweet){
				var media = tweet.entities.media;
				var parsedText = twitterParse.autoLink(tweet.text);

				return Object.assign({
					image: (media && media.length > 0) ? media[0].media_url_https : '',
					text_parsed: parsedText
				}, tweet);
			});

			nodeCache.put('parsedTweets', twits, _cacheTime);
			return twits;
		} else {
			return _dataCache;
		}
	};

	return {
		getUserTimeline: getUserTimeline,
		parseTweets: parseTweets
	};

})();

module.exports = TwitterApiClient;
