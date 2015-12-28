'use strict';

var nodeCache = require('memory-cache');

var CacheApiClient = (function() {

	var _serialize = function(params) {
		return Object.keys(params).map(function(key) {
			return key + '=' + params[key];
		}).join('&');
	};

	var validate = function(src, params, time) {
		var _self = this,
			_url = _self.base_url + src + '?' + _serialize(params),
			_cacheTime = time * 6000 || 86400000,
			_dataCache = nodeCache.get(_url);

		if (!_dataCache) {
			return _self.get(src, params).then(function(data) {
				nodeCache.put(_url, data, _cacheTime);
				return data;
			});
		} else {
			return Promise.resolve(_dataCache);
		}
	};

	return {
		validate: validate
	};

})();

module.exports = CacheApiClient;
