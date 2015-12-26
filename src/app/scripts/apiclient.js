'use strict';

var fetch = require('node-fetch'),
	cache = require('memory-cache');

var ApiClient = (function(options) {
	this.options = options;
	this.baseUrl = options.base_url || '//';
	this.cacheTime = options.cache * 6000 || 3000;
	this.oAuth = options.oauth || false;
	this.accesToken = options.accesToken;
	this.accesTokenSecret = options.accesTokenSecret;

	this.serialize = function(params) {
		if(params){
			return Object.keys(params).map(function(key) {
				return key + '=' + params[key];
			}).join('&');
		} else {
			return '';
		}
	};

	this.getOAuth = function(src, params) {
		var _self = this,
			_url = _self.baseUrl + src + '?' + _self.serialize(params),
			dataCache = cache.get(_url);

		oAuth.get(_url, this.accesToken, this.accesTokenSecret, function (error, data, res) {
			if (!error && res.statusCode == 200) {
				if (!dataCache) {
					return fetch(_url)
						.then(function(data) {
							if(data){
								var dataParsed = data.json();
								cache.put(_url, dataParsed, _self.cacheTime);
								return dataParsed;
							} else {
								return data;
							}
						});
				} else {
					return Promise.resolve(dataCache);
				}
			}
		});
	};

	this.get = function(src, params) {
		var _self = this,
			_url = _self.baseUrl + src + '?' + _self.serialize(params),
			dataCache = cache.get(_url);

		if (!dataCache) {
			return fetch(_url)
				.then(function(data) {
					if(data){
						var dataParsed = data.json();
						cache.put(_url, dataParsed, _self.cacheTime);
						return dataParsed;
					} else {
						return data;
					}
				});
		} else {
			return Promise.resolve(dataCache);
		}
	};
});

module.exports = ApiClient;
