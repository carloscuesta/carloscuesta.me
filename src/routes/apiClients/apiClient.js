const Fetch = require('node-fetch')

class ApiClient {
  constructor (options) {
    this.baseUrl = options.base_url || '//'
    this.debug = options.debug || false
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

  getData (url) {
    return this.fetchData(url)
  }

  get (src, params) {
    const url = `${this.baseUrl}${src}?${this.serialize(params)}`
    this.consoleDebugMessage('url', url)
    return this.getData(url)
  }
}

module.exports = ApiClient
