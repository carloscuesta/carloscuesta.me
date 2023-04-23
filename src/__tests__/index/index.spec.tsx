import renderer from 'react-test-renderer'

import Index, { getStaticProps } from 'src/pages/index'
import { fetchPosts } from 'src/utils/api/blog'
import { fetchRepositories } from 'src/utils/api/github'
import * as stubs from './stubs'

jest.mock('next-seo', () => ({
  NextSeo: 'NextSeo',
  SocialProfileJsonLd: 'SocialProfileJsonLd',
}))
jest.mock('src/utils/api/blog')
jest.mock('src/utils/api/github')

/*
  I'm mocking the components since those are unit tested.
  So there's no point to test the rendering of them twice.
  It's more easier to manage little snapshots than big ones.
*/

jest.mock('src/components/pages/index/Biography', () => 'Biography')
jest.mock('src/components/pages/index/Projects', () => 'Projects')
jest.mock('src/components/pages/index/Writings', () => 'Writings')
jest.mock('src/components/SectionTitle', () => 'SectionTitle')
jest.mock('src/components/PageTitle', () => 'PageTitle')

describe('index', () => {
  describe('page', () => {
    it('should match index page', () => {
      const wrapper = renderer.create(<Index {...stubs.props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('getStaticProps', () => {
    beforeAll(() => {
      ;(fetchPosts as jest.Mock).mockReturnValue(stubs.posts)
      ;(fetchRepositories as jest.Mock).mockReturnValue(stubs.repositories)
    })

    it('should return posts and repositories as props and set revalidate', async () => {
      const props = await getStaticProps({})

      expect(fetchPosts).toHaveBeenCalledWith()
      expect(fetchRepositories).toHaveBeenCalledWith()

      expect(props).toEqual({
        props: {
          posts: stubs.posts,
          repositories: stubs.repositories,
        },
        revalidate: 3600,
      })
    })
  })
})
