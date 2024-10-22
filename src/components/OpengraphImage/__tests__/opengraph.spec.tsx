import { render } from '@testing-library/react'
import fetch, { enableFetchMocks } from 'jest-fetch-mock'

import OpengraphImage, { getFonts } from '..'

describe('OpengraphImage', () => {
  it('should match a page opengraph', () => {
    const { container } = render(
      <OpengraphImage
        title="Blog"
        description="This is a test description"
        url="/"
      />,
    )

    expect(container).toMatchSnapshot()
  })

  it('should match a blog post opengraph', () => {
    const { container } = render(
      <OpengraphImage
        title="Writing ADRs"
        description="This is a test description"
        url="/blog"
        isBlogPost
      />,
    )

    expect(container).toMatchSnapshot()
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
