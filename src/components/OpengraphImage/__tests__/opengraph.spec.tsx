import renderer from 'react-test-renderer'
import fetch, { enableFetchMocks } from 'jest-fetch-mock'

import OpengraphImage, { getFonts } from '..'

describe('OpengraphImage', () => {
  it('should match a page opengraph', () => {
    const wrapper = renderer.create(
      <OpengraphImage
        title="Blog"
        description="This is a test description"
        url="/"
      />,
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should match a blog post opengraph', () => {
    const wrapper = renderer.create(
      <OpengraphImage
        title="Writing ADRs"
        description="This is a test description"
        url="/blog"
        isBlogPost
      />,
    )

    expect(wrapper).toMatchSnapshot()
  })

  describe('getFonts', () => {
    beforeAll(() => {
      enableFetchMocks()
    })

    it('should return an array of fonts', async () => {
      const fonts = await getFonts()

      expect(fonts).toMatchSnapshot()
    })
  })
})
