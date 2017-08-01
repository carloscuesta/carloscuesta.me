'use strict';

const ApiClient = require('./apiclient')
const CacheApiClient = require('./cache')
const nodeCache = require('memory-cache')

const CACHE_TIME = 86400000
const GITHUB_CACHE = 'GITHUB_CACHE'
const githubDataCache = nodeCache.get(GITHUB_CACHE)

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

	mutator(payload) {
		if (githubDataCache) {
			return githubDataCache
		}
		const repositories = payload.items.map((repo) => ({
			language: repo.language && repo.language.toLowerCase(),
			url: repo.html_url,
			name: repo.name,
			stars: repo.stargazers_count,
			forks: repo.forks,
			description: repo.description,
			homepage: repo.homepage
		}))

		nodeCache.put(GITHUB_CACHE, repositories, CACHE_TIME)
		return repositories
	}
}

module.exports = new GithubApiClient()
