const nodeCache = require('memory-cache')
const moment = require('moment')
const stripTags = require('striptags')
const ApiClient = require('./apiClient')
const CacheApiClient = require('./cache')
const CONFIG = require('./config')

class GhostApiClient {
  constructor () {
    this.apiClient = new ApiClient({
      base_url: 'https://carloscuesta.me/blog/ghost/api/v3/content'
    })
  }

  getLastPosts (params) {
    return CacheApiClient.validate.call(this.apiClient, '/posts', params)
  }

  mutator (payload) {
    const ghostDataCache = nodeCache.get(CONFIG.GHOST_CACHE)

    if (ghostDataCache) return ghostDataCache

    const posts = payload.posts.map((post) => ({
      title: post.title,
      excerpt: `${stripTags(post.html).substring(0, 120)}...`,
      url: post.url,
      publishedAt: moment(post.published_at).startOf('hour').fromNow(),
      image: post.feature_image.replace('/upload/', '/upload/w_500/')
    }))

    nodeCache.put(CONFIG.GHOST_CACHE, posts, CONFIG.CACHE_TIME)
    return posts
  }
}

module.exports = new GhostApiClient()
