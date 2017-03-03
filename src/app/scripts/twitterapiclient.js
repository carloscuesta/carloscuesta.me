'use strict';

require('dotenv').load();

const ApiClient = require('./apiclient');
const twitterParse = require('twitter-text');
const moment = require('moment');
const CacheApiClient = require('./cache');
const nodeCache = require('memory-cache');

const CACHE_TIME = 86400000
const dataCache = nodeCache.get('parsedTweets')

class TwitterApiClient {
	constructor() {
		this.apiClient = new ApiClient({
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
		})
	}

	getUserTimeline(params) {
		return CacheApiClient.validate
			.call(this.apiClient, '/statuses/user_timeline.json', params)
	}

	parseTweets(tweets) {
		if (!dataCache) {
			const tweetMap = tweets.map((tweet) => {
				const media = tweet.entities.media;
				const parsedText = twitterParse.autoLink(tweet.text);

				return Object.assign({
					image: (media && media.length > 0) ? media[0].media_url_https : '',
					text_parsed: parsedText
				}, tweet)
			})
			nodeCache.put('parsedTweets', tweetMap, CACHE_TIME);
			return tweetMap;
		}
		return dataCache;
	}
}

module.exports = new TwitterApiClient();
