'use strict';

var ApiClient = require('./apiclient'),
	CacheApiClient = require('./cache');

var TwitterApiClient = (function() {

	var _ApiClient = new ApiClient({
        base_url: 'https://api.twitter.com/1.1',
        oauth: {
            request_token: 'https://api.twitter.com/oauth/request_token',
            access_token: 'https://api.twitter.com/oauth/access_token',
            consumer_key: 'vpF1dfWXDHiFaMT7LTFl0TOSq',
            consumer_secret: 'HwQWzgRDXe4FBKiQXpcoqyOgJhDuo9z4KQqdY8przFNlVgsQcB',
            access_token: '2974751872-3D4Bb0YFIJBadjAWZ3IP0vgPxOnEUilSiExbWqM',
            access_token_secret: 'LLMzB5Itdv6i4VaqPVmMmXi2rZXmDxN3v1SDw0bDHwXnl',
        },
        debug: true
    });

	var getUserTimeline = function(params) {
		return CacheApiClient.validate.call(_ApiClient,'/statuses/user_timeline.json', params);
	};

	return {
		getUserTimeline: getUserTimeline
	};

})();

module.exports = TwitterApiClient;
