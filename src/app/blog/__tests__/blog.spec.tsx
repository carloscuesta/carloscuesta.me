import renderer from 'react-test-renderer'

import Blog from '../page'
import { fetchPosts } from 'src/utils/api/blog'
import * as stubs from './stubs'

jest.mock('src/utils/api/blog', () => ({
  fetchPosts: jest.fn(() => stubs.posts),
}))

/*
  I'm mocking the components since those are unit tested.
  So there's no point to test the rendering of them twice.
  It's more easier to manage little snapshots than big ones.
*/

/* Mock Date.now to avoid updating snapshots for formatDistanceToNow */
Date.now = jest.fn(() => 1593025862540)

describe('blog', () => {
  describe('page', () => {
    it('should match blog page', async () => {
      const wrapper = renderer.create(await Blog())

      expect(fetchPosts).toHaveBeenCalledWith()
      expect(wrapper).toMatchSnapshot()
    })
  })
})
