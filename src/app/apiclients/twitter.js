'use strict';

require('dotenv').load();

const ApiClient = require('./apiclient');
const twitterParse = require('twitter-text');
const moment = require('moment');
const CacheApiClient = require('./cache');
const nodeCache = require('memory-cache');

const CACHE_TIME = 86400000
const TWITTER_CACHE = 'TWITTER_CACHE'
const twitterDataCache = nodeCache.get(TWITTER_CACHE)

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

	mutator(payload) {
		if (twitterDataCache) {
			return twitterDataCache
		}

		const tweets = payload.map((tweet) => {
			const media = tweet.entities.media

			return {
				screenName: tweet.user.screen_name,
				userName: tweet.user.name,
				id: tweet.id_str,
				retweets: tweet.retweet_count,
				favourites: tweet.favorite_count,
				image: (media && media.length > 0) ? media[0].media_url_https : '',
				text: twitterParse.autoLink(tweet.text)
			}
		})

		nodeCache.put(TWITTER_CACHE, tweets, CACHE_TIME)
		return tweets
	}
}

module.exports = new TwitterApiClient();
