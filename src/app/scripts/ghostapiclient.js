'use strict';

var ApiClient = require('./apiclient'),
	fetch = require('node-fetch'),
	FormData = require('form-data'),
	CacheApiClient = require('./cache');

var GhostApiClient = (function() {

	var _ApiClient = new ApiClient({
		'base_url': 'http://carloscuesta.me/blog/ghost/api/v0.1',
		'cache': 5
	});


	var ghostLogin = function() {

		return fetch('http://carloscuesta.me/blog/ghost/api/v0.1/authentication/token', {
				method: 'POST',
				body: '',
			})
			.then(function(res) {
				console.log(res);
				return res.json();
			});
	};

	return {
		ghostLogin: ghostLogin
	};
})();

module.exports = GhostApiClient;
