'use strict';

const ApiClient = require('./apiclient');
const CacheApiClient = require('./cache');
const nodeCache = require('memory-cache');
const moment = require('moment');
const stripTags = require('striptags');

const CACHE_TIME = 86400000;
const GHOST_CACHE = 'GHOST_CACHE'
const ghostDataCache = nodeCache.get(GHOST_CACHE)

class GhostApiClient {
	constructor() {
		this.apiClient = new ApiClient({
			'base_url': 'http://carloscuesta.me/blog/ghost/api/v0.1',
			'cache': 5
		});
	}

	getLastPosts(params) {
		return CacheApiClient.validate
			.call(this.apiClient, '/posts', params)
	}

	mutator(payload) {
		if (ghostDataCache) {
			return ghostDataCache
		}

		const posts = payload.posts.map((post) => ({
			title: post.title,
			tags: post.tags,
			excerpt: `${stripTags(post.html).substring(0, 120)}...`,
			url: post.url,
			publishedAt: moment(post.updated_at).startOf('hour').fromNow(),
			image: post.image.replace('/upload/', '/upload/w_500/'),
		}))

		nodeCache.put(GHOST_CACHE, posts, CACHE_TIME)
		return posts
	}
}

module.exports = new GhostApiClient();
