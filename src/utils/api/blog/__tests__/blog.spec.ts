import { getPostSlugs, fetchPost, fetchPosts } from '../index'
import { transformPost } from '../mutators'
import { VFile } from 'vfile'

import postFixture from './fixtures/post.json'

/* Mock Date.now to avoid updating snapshots for formatDistanceToNow */
Date.now = jest.fn(() => 1593025862540)

describe('Ghost API Client', () => {
  describe('getPostSlugs', () => {
    it('should match getPostSlugs', () => {
      expect(getPostSlugs()).toMatchSnapshot()
    })
  })

  describe('fetchPost', () => {
    it('should return a post with the slug terminal-setup', async () => {
      const post = await fetchPost('terminal-setup')

      expect(post).toMatchSnapshot()
    })
  })

  describe('fetchPosts', () => {
    it('should return an array of posts sorted by datePublished', async () => {
      const posts = await fetchPosts()

      expect(posts.slice(0, 3)).toMatchSnapshot()
    })
  })

  describe('mutators', () => {
    describe('transformPost', () => {
      it('should match the mutated post', () => {
        expect(
          transformPost({
            ...postFixture,
            html: new VFile(postFixture.html),
          })
        ).toMatchSnapshot()
      })
    })
  })
})
