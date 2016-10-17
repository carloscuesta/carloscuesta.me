'use strict';

var ApiClient = require('./apiclient'),
	CacheApiClient = require('./cache'),
	nodeCache = require('memory-cache');

var InstagramApiClient = (function() {

	var _ApiClient = new ApiClient({
		'base_url': 'https://api.instagram.com/v1',
		'cache': 5
	});

	var getPictures = function(params){
		return CacheApiClient.validate.call(_ApiClient, '/users/self/media/recent/', params);
	};

	return {
		getPictures: getPictures
	};
})();

module.exports = InstagramApiClient;
