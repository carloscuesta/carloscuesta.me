const Fetch = require('node-fetch')
const OAuth = require('oauth')

class ApiClient {
  constructor (options) {
    this.baseUrl = options.base_url || '//'
    this.oauth = options.oauth || false
    this.debug = options.debug || false
    this.oAuth = this.oauth
      ? new OAuth.OAuth(this.oauth.request_token, this.oauth.access_token, this.oauth.consumer_key, this.oauth.consumer_secret, '1.0A', null, 'HMAC-SHA1')
      : false
  }

  consoleDebugMessage (text, data) {
    if (this.debug) {
      console.log('\x1b[36m', text, '\x1b[0m', data)
    }
  }

  serialize (params) {
    return Object.keys(params).map((key) => {
      return key + '=' + params[key]
    }).join('&')
  }

  onGetData (data) {
    if (!!data && !!data.json) data = data.json()
    return data
  }

  fetchData (url) {
    return Fetch(url).then((data) => {
      return this.onGetData(data)
    })
  }

  getDataOAuth (url) {
    return new Promise((resolve, reject) => {
      this.oAuth
        .get(
          url,
          this.oauth.access_token,
          this.oauth.access_token_secret, (e, data, res) => {
            if (e) {
              reject(e)
            } else {
              resolve(this.onGetData(JSON.parse(data)))
            }
          }
        )
    })
  }

  getData (url) {
    return this.fetchData(url)
  }

  get (src, params) {
    const url = `${this.baseUrl}${src}?${this.serialize(params)}`
    this.consoleDebugMessage('url', url)
    if (this.oauth) return this.getDataOAuth(url)
    return this.getData(url)
  }
}

module.exports = ApiClient
