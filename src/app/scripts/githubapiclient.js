'use strict';

var ApiClient = require('./apiclient'),
	CacheApiClient = require('./cache'),
	nodeCache = require('memory-cache');

var GithubApiClient = (function() {

	var _ApiClient = new ApiClient({
		'base_url': 'https://api.github.com',
		'cache': 5
	});

	var getUserRepos = function(userName, params) {
		return CacheApiClient.validate.call(_ApiClient, '/users/'+userName+'/repos', params);
	};

	var getSearch = function(params){
		return CacheApiClient.validate.call(_ApiClient, '/search/repositories', params);
	};

	var getOrgRepos = function(orgName, params) {
		return CacheApiClient.validate.call(_ApiClient, '/orgs/'+orgName+'/repos', params);
	};

	var getRepo = function(userName, repoName, params){
		return CacheApiClient.validate.call(_ApiClient,'/repos/'+userName+'/'+repoName, params);
	};

	var parseRepos = function(repos) {
		var _cacheTime =  86400000,
			_dataCache = nodeCache.get('parsedRepoLangs');
		if (!_dataCache) {
			for (var i = 0; i < repos.items.length; i++) {
				if (repos.items[i].language!==null) {
					repos.items[i].language = repos.items[i].language.toLowerCase();
				}
			}
			nodeCache.put('parsedRepoLangs', repos, _cacheTime);
			return repos;
		} else {
			return _dataCache;
		}
	};

	return {
		getUserRepos: getUserRepos,
		getSearch: getSearch,
		getOrgRepos: getOrgRepos,
		getRepo: getRepo,
		parseRepos: parseRepos
	};
})();

module.exports = GithubApiClient;
