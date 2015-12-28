'use strict';

var ApiClient = require('./apiclient'),
	CacheApiClient = require('./cache');

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

	return {
		getUserRepos: getUserRepos,
		getSearch: getSearch,
		getOrgRepos: getOrgRepos,
		getRepo: getRepo
	};
})();

module.exports = GithubApiClient;
