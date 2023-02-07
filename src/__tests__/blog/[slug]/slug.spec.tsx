import renderer from 'react-test-renderer'

import BlogSlug, { getStaticPaths, getStaticProps } from 'src/pages/blog/[slug]'
import { getPostSlugs, fetchPost } from 'src/utils/api/blog'
import * as stubs from './stubs'

jest.mock('next-seo', () => ({ NextSeo: 'NextSeo', ArticleJsonLd: 'ArticleJsonLd' }))
jest.mock('src/utils/api/blog')

/*
  I'm mocking the components since those are unit tested.
  So there's no point to test the rendering of them twice.
  It's more easier to manage little snapshots than big ones.
*/

jest.mock('src/components/shared/Wrapper', () => 'Wrapper')
jest.mock('src/components/pages/blog/[slug]/Header', () => 'Header')
jest.mock('src/components/pages/blog/[slug]/FeaturedImage', () => 'FeaturedImage')
jest.mock('src/components/pages/blog/[slug]/NewsletterSubscribe', () => 'NewsletterSubscribe')
jest.mock('src/components/pages/blog/[slug]/ShareLinks', () => 'ShareLinks')
jest.mock('src/components/pages/blog/[slug]/DisqusComments', () => 'DisqusComments')

describe('blog/[slug]', () => {
  describe('page', () => {
    it('should match blog/[slug] page', () => {
      const wrapper = renderer.create(<BlogSlug {...stubs.props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('getStaticPaths', () => {
    beforeAll(() => {
      (getPostSlugs as jest.Mock).mockReturnValue(stubs.postSlugs)
    })

    it('should return an object with paths and fallback as keys', () => {
      const paths = getStaticPaths({})

      expect(paths).toEqual({
        paths: stubs.postSlugs.map((slug) => ({ params: { slug } })),
        fallback: false
      })
    })
  })

  describe('getStaticProps', () => {
    beforeAll(() => {
      (fetchPost as jest.Mock).mockReturnValue(stubs.post)
    })

    it('should return post as props', async () => {
      const props = await getStaticProps(stubs.context)

      expect(fetchPost).toHaveBeenCalledWith(stubs.context.params.slug)

      expect(props).toEqual({ props: stubs.props })
    })
  })
})
