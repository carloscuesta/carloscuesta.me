'use strict';

var ApiClient = require('./apiclient'),
	CacheApiClient = require('./cache'),
	nodeCache = require('memory-cache'),
	moment = require('moment'),
	striptags = require('striptags');

var GhostApiClient = (function() {

	var _ApiClient = new ApiClient({
		'base_url': 'http://carloscuesta.me/blog/ghost/api/v0.1',
		'cache': 5
	});

	var getLastPosts = function(params) {
		return CacheApiClient.validate.call(_ApiClient,'/posts', params);
	};

	var parsePosts = function(postData) {
		var _cacheTime =  86400000,
			_dataCache = nodeCache.get('parsedPosts');

		Array.prototype.insert = function (index, item) {
			this.splice(index, 0, item);
		};

		if (!_dataCache) {
			for (var i = 0; i < postData.posts.length; i++) {
				var image = postData.posts[i].image.split('/'),
					params = 'w_500';
					image.insert(6, params);
				var parsedImages = image.join('/');

				postData.posts[i].image = parsedImages;
				postData.posts[i].published_at = moment(postData.posts[i].updated_at).startOf('hour').fromNow();
				postData.posts[i].html = striptags(postData.posts[i].html).substring(0,120)+' ...';
			}
			nodeCache.put('parsedPosts', postData, _cacheTime);
			return postData;
		} else {
			return _dataCache;
		}
	};

	return {
		getLastPosts: getLastPosts,
		parsePosts: parsePosts
	};
})();

module.exports = GhostApiClient;
