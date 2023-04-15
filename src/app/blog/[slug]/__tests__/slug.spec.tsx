import renderer from 'react-test-renderer'

import BlogSlug, { generateStaticParams } from '../page'
import { getPostSlugs, fetchPost } from 'src/utils/api/blog'
import * as stubs from './stubs'

jest.mock('next-seo', () => ({
  NextSeo: 'NextSeo',
  ArticleJsonLd: 'ArticleJsonLd',
}))
jest.mock('src/utils/api/blog')

/*
  I'm mocking the components since those are unit tested.
  So there's no point to test the rendering of them twice.
  It's more easier to manage little snapshots than big ones.
*/

jest.mock('src/components/Wrapper', () => 'Wrapper')
jest.mock('../components/Header', () => 'Header')
jest.mock('../components/FeaturedImage', () => 'FeaturedImage')
jest.mock('../components/NewsletterSubscribe', () => 'NewsletterSubscribe')
jest.mock('../components/ShareLinks', () => 'ShareLinks')
jest.mock('../components/DisqusComments', () => 'DisqusComments')

describe('blog/[slug]', () => {
  describe('page', () => {
    it('should match blog/[slug] page', async () => {
      const params = { params: { slug: stubs.post.slug } }
      const wrapper = renderer.create(await BlogSlug(params))

      expect(fetchPost).toHaveBeenCalledWith(stubs.post.slug)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('generateStaticParams', () => {
    beforeAll(() => {
      ;(getPostSlugs as jest.Mock).mockReturnValue(stubs.postSlugs)
    })

    it('should return an object with paths and fallback as keys', () => {
      const paths = generateStaticParams()

      expect(paths).toEqual({
        paths: stubs.postSlugs.map((slug) => ({ params: { slug } })),
        fallback: false,
      })
    })
  })
})
