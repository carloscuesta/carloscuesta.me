'use strict';

const ApiClient = require('./apiclient');
const CacheApiClient = require('./cache');
const nodeCache = require('memory-cache');
const moment = require('moment');
const stripTags = require('striptags');

const CACHE_TIME = 86400000;
const dataCache = nodeCache.get('parsedPosts')

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

	parsePosts(post) {
		Array.prototype.insert = function (index, item) {
			this.splice(index, 0, item);
		};

		if (!dataCache) {
			for (var i = 0; i < post.posts.length; i++) {
				const params = 'w_500';
				const image = post.posts[i].image.split('/');
				image.insert(6, params);
				const parsedImages = image.join('/');

				post.posts[i].image = parsedImages;
				post.posts[i].published_at = moment(post.posts[i].updated_at).startOf('hour').fromNow();
				post.posts[i].html = stripTags(post.posts[i].html).substring(0,120)+' ...';
			}
			nodeCache.put('parsedPosts', post, CACHE_TIME);
			return post;
		}
		return dataCache;
	}
}

module.exports = new GhostApiClient();
