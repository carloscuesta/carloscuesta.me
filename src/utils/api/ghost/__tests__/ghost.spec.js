import callApi from 'src/utils/api/callApi'
import { fetchPost, fetchPosts } from '../index'
import { transformPost, transformPosts } from '../mutators'

import postsFixture from './fixtures/posts'
import postFixture from './fixtures/post'

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

    it('should match fetchPost call', () => {
      fetchPost('slug')

      expect(callApi.mock.calls[0][0]).toMatchSnapshot()
    })
  })

  describe('mutators', () => {
    describe('transformPosts', () => {
      it('should match the mutated posts', () => {
        expect(transformPosts(postsFixture)).toMatchSnapshot()
      })
    })

    describe('transformPost', () => {
      it('should match the mutated post', () => {
        expect(transformPost(postFixture)).toMatchSnapshot()
      })
    })
  })
})
