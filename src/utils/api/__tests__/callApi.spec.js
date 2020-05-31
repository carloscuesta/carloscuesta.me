import { enableFetchMocks } from 'jest-fetch-mock'

import callApi from '../callApi'
import apiCache from '../cache'
import * as stubs from './stubs'

jest.mock('node-cache', () => jest.fn().mockImplementation(() => ({
  set: jest.fn(),
  get: jest.fn()
})))

describe('callApi', () => {
  beforeAll(() => {
    enableFetchMocks()
  })

  describe('when request is cached', () => {
    beforeAll(() => {
      apiCache.get.mockReturnValue(stubs.responseCache)
    })

    it('should return the response from the cache', async () => {
      const request = stubs.request()
      const response = await callApi(request)

      expect(apiCache.get).toHaveBeenCalledWith(request.cacheKey)
      expect(fetch).not.toHaveBeenCalled()
      expect(request.mutator).not.toHaveBeenCalled()
      expect(response).toEqual(stubs.responseCache)
    })
  })

  describe('when request is not cached', () => {
    describe('when callApi has no requestOptions', () => {
      beforeAll(() => {
        apiCache.get.mockReturnValue(undefined)
        fetch.mockResponse(JSON.stringify(stubs.response))
      })

      it('should call the api, mutate the data and save the data to the cache', async () => {
        const request = stubs.request()
        const response = await callApi(request)

        expect(apiCache.get).toHaveBeenCalledWith(request.cacheKey)
        expect(fetch).toHaveBeenCalledWith(request.url, undefined)
        expect(request.mutator).toHaveBeenCalledWith(response)
        expect(apiCache.set).toHaveBeenCalledWith(request.cacheKey, response)
        expect(response).toEqual(stubs.response)
      })
    })

    describe('when callApi has requestOptions', () => {
      beforeAll(() => {
        apiCache.get.mockReturnValue(undefined)
        fetch.mockResponse(JSON.stringify(stubs.response))
      })

      it('should call the api, mutate the data and save the data to the cache', async () => {
        const request = stubs.request(stubs.headers)
        const response = await callApi(request)

        expect(apiCache.get).toHaveBeenCalledWith(request.cacheKey)
        expect(fetch).toHaveBeenCalledWith(request.url, request.requestOptions)
        expect(request.mutator).toHaveBeenCalledWith(response)
        expect(apiCache.set).toHaveBeenCalledWith(request.cacheKey, response)
        expect(response).toEqual(stubs.response)
      })
    })
  })
})
