import { getPostSlugs, fetchPost, fetchPosts } from '../index'
import { transformPost } from '../mutators'

import postFixture from './fixtures/post.json'

jest.mock('src/utils/api/callApi', () =>
  jest.fn().mockResolvedValue({
    'react-miami-2023': '1,000 views',
    'effective-refactoring-with-codemods': '1,000 views',
  }),
)

/* Mock Date.now to avoid updating snapshots for formatDistanceToNow */
Date.now = jest.fn(() => 1593025862540)

describe('Blog API Client', () => {
  describe('getPostSlugs', () => {
    it('should match getPostSlugs', () => {
      expect(getPostSlugs()).toMatchSnapshot()
    })
  })

  describe.skip('fetchPost', () => {
    it('should return a post with the slug terminal-setup', async () => {
      const post = await fetchPost('terminal-setup')

      expect(post).toMatchSnapshot()
    })
  })

  describe.skip('fetchPosts', () => {
    it('should return an array of posts sorted by datePublished', async () => {
      const posts = await fetchPosts()
      const expectedPosts = [
        posts.find((post) => post.slug === 'react-miami-2023'),
        posts.find(
          (post) => post.slug === 'effective-refactoring-with-codemods',
        ),
      ]

      expect(expectedPosts).toMatchSnapshot()
    }, 10_000)
  })

  describe('mutators', () => {
    describe('transformPost', () => {
      it('should match the transformed post', async () => {
        // @ts-expect-error - We are mocking the post object
        const post = await transformPost(postFixture)

        expect(post).toMatchSnapshot()
      })
    })
  })
})
