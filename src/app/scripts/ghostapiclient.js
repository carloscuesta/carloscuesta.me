'use strict';

var ApiClient = require('./apiclient'),
	CacheApiClient = require('./cache'),
	nodeCache = require('memory-cache'),
	moment = require('moment');

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
		if (!_dataCache) {
			for (var i = 0; i < postData.posts.length; i++) {
				postData.posts[i].published_at = moment(postData.posts[i].published_at).startOf('day').fromNow();
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
