'use strict';

const ApiClient = require('./apiclient')
const CacheApiClient = require('./cache')
const nodeCache = require('memory-cache')

const CACHE_TIME = 86400000
const dataCache = nodeCache.get('parsedRepoLangs')

class GithubApiClient {
	constructor() {
		this.apiClient = new ApiClient({
			'base_url': 'https://api.github.com',
			'cache': 5
		});
	}

	getSearch(params) {
		return CacheApiClient.validate
			.call(this.apiClient, '/search/repositories', params)
	}

	parseRepos(repos) {
		if (!dataCache) {
			for (var i = 0; i < repos.items.length; i++) {
				if (repos.items[i].language) {
					repos.items[i].language = repos.items[i].language.toLowerCase();
				}
			}
			nodeCache.put('parsedRepoLangs', repos, CACHE_TIME);
			return repos;
		}
		return dataCache;
	}
}

module.exports = new GithubApiClient()
