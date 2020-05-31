import callApi from 'src/utils/api/callApi'
import { fetchPosts } from '../index'
import { transformPosts } from '../mutators'

import postsFixture from './fixtures/posts'

jest.mock('src/utils/api/callApi')

describe('Ghost API Client', () => {
  describe('apiCalls', () => {
    beforeEach(() => {
      callApi.mockReset()
    })

    it('should match fetchPosts call', () => {
      fetchPosts()

      expect(callApi.mock.calls[0][0]).toMatchSnapshot()
    })
  })

  describe('mutators', () => {
    describe('transformPosts', () => {
      it('should match the mutated posts', () => {
        expect(transformPosts(postsFixture)).toMatchSnapshot()
      })
    })
  })
})
