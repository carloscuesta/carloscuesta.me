import renderer from 'react-test-renderer'

import Blog, { getStaticProps } from 'src/pages/blog'
import { fetchPosts } from 'src/utils/api/blog'
import * as stubs from './stubs'

jest.mock('next-seo', () => ({ NextSeo: 'NextSeo' }))
jest.mock('src/utils/api/blog')

/*
  I'm mocking the components since those are unit tested.
  So there's no point to test the rendering of them twice.
  It's more easier to manage little snapshots than big ones.
*/

jest.mock('src/components/shared/BlogPost', () => 'BlogPost')

/* Mock Date.now to avoid updating snapshots for formatDistanceToNow */
Date.now = jest.fn(() => 1593025862540)

describe('blog', () => {
  describe('page', () => {
    it('should match blog page', () => {
      const wrapper = renderer.create(<Blog {...stubs.props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('getStaticProps', () => {
    beforeAll(() => {
      (fetchPosts as jest.Mock).mockReturnValue(stubs.posts)
    })

    it('should return posts as props', async () => {
      const props = await getStaticProps({})

      expect(fetchPosts).toHaveBeenCalledWith()

      expect(props).toEqual({
        props: {
          posts: stubs.props.posts
        }
      })
    })
  })
})
