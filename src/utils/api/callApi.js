// @flow
import apiCache from './cache'

export type callApiOptions = {
  cacheKey: string,
  mutator: Function,
  requestOptions?: Object,
  url: string
}

const callApi = async (options: callApiOptions): Promise<Object> => {
  try {
    const requestCache = apiCache.get(options.cacheKey)

    if (requestCache) return requestCache

    const response = await fetch(options.url, options.requestOptions)
    const data = await response.json()
    const dataTransformed = options.mutator(data)

    apiCache.set(options.cacheKey, dataTransformed)

    return dataTransformed
  } catch (exception) {
    console.error('ERROR @ callApi:', exception)
  }
}

export default callApi
