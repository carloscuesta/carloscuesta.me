import * as analytics from '../index'
import * as stubs from './stubs'

describe('analytics', () => {
  it('should match analytics module', () => {
    expect(analytics).toMatchSnapshot()
  })

  describe('trackPageView', () => {
    const gtag = jest.fn()

    beforeAll(() => {
      window.gtag = gtag
    })

    afterAll(() => {
      window.gtag = undefined
    })

    it('should call window.gtag with ID and page_path arguments', () => {
      analytics.trackPageView(stubs.url)

      expect(gtag).toHaveBeenCalledWith(
        'config',
        analytics.GA_TRACKING_ID,
        { page_path: stubs.url }
      )
    })
  })
})
