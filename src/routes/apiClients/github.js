const nodeCache = require('memory-cache')
const ApiClient = require('./apiClient')
const CacheApiClient = require('./cache')
const CONFIG = require('./config')
const githubDataCache = nodeCache.get(CONFIG.GITHUB_CACHE)

class GithubApiClient {
  constructor () {
    this.apiClient = new ApiClient({ 'base_url': 'https://api.github.com' })
  }

  getSearch (params) {
    return CacheApiClient.validate.call(
      this.apiClient, '/search/repositories',
      params
    )
  }

  mutator (payload) {
    if (githubDataCache) return githubDataCache

    const repositories = payload.items.map((repo) => ({
      language: repo.language && repo.language.toLowerCase(),
      url: repo.html_url,
      name: repo.name,
      stars: repo.stargazers_count,
      forks: repo.forks,
      description: repo.description,
      homepage: repo.homepage
    }))

    nodeCache.put(CONFIG.GITHUB_CACHE, repositories, CONFIG.CACHE_TIME)
    return repositories
  }
}

module.exports = new GithubApiClient()
