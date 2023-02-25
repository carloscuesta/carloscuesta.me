import fetch, { enableFetchMocks } from 'jest-fetch-mock'

import callApi from '../callApi'
import * as stubs from './stubs'

describe('callApi', () => {
  beforeAll(() => {
    enableFetchMocks()
  })

  describe('when callApi has no requestOptions', () => {
    beforeAll(() => {
      fetch.mockResponse(JSON.stringify(stubs.response))
    })

    it('should call the api, mutate the data and save the data to the cache', async () => {
      const request = stubs.request()
      const response = await callApi(request)

      expect(fetch).toHaveBeenCalledWith(request.url, undefined)
      expect(request.mutator).toHaveBeenCalledWith(response)
      expect(response).toEqual(stubs.response)
    })
  })

  describe('when callApi has requestOptions', () => {
    beforeAll(() => {
      fetch.mockResponse(JSON.stringify(stubs.response))
    })

    it('should call the api, mutate the data and save the data to the cache', async () => {
      const request = stubs.request(stubs.headers)
      const response = await callApi(request)

      expect(fetch).toHaveBeenCalledWith(request.url, request.requestOptions)
      expect(request.mutator).toHaveBeenCalledWith(response)
      expect(response).toEqual(stubs.response)
    })
  })

  describe('when callApi throws an error', () => {
    beforeAll(() => {
      fetch.mockReject(new Error('Test error'))
    })

    it('should throw an error', async () => {
      const request = stubs.request()

      await expect(async () => {
        await callApi(request)
      }).rejects.toThrowError()
    })
  })
})
