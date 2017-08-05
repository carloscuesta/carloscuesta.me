const nodeCache = require('memory-cache')
const CONFIG = require('./config')

class CacheApiClient {
  serialize (params) {
    return Object.keys(params).map((key) => {
      return key + '=' + params[key]
    }).join('&')
  }

  validate (src, params, time) {
    const _self = this
    const url = `${_self.base_url}${src}?${this.serialize(params)}`
    const cacheTime = time * 6000 || CONFIG.CACHE_TIME
    const dataCache = nodeCache.get(url)

    if (!dataCache) {
      return _self.get(src, params).then((data) => {
        nodeCache.put(url, data, cacheTime)
        return data
      })
    } else {
      return Promise.resolve(dataCache)
    }
  }
}

module.exports = new CacheApiClient()
