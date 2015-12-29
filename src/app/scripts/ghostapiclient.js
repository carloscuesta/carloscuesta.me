'use strict';

var ApiClient = require('./apiclient'),
	CacheApiClient = require('./cache');

var GhostApiClient = (function() {

	var _ApiClient = new ApiClient({
		'base_url': 'http://carloscuesta.me/blog/ghost/api/v0.1',
		'cache': 5
	});

	var getLastPosts = function(params) {
		return CacheApiClient.validate.call(_ApiClient,'/posts', params);
	};

	return {
		getLastPosts: getLastPosts
	};
})();

module.exports = GhostApiClient;
