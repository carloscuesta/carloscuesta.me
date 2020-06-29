import * as analytics from '../index'
import * as stubs from './stubs'

describe('analytics', () => {
  it('should match analytics module', () => {
    expect(analytics).toMatchSnapshot()
  })

  describe('trackPageView', () => {
    const ga = jest.fn()

    beforeAll(() => {
      window.ga = ga
    })

    afterAll(() => {
      window.ga = undefined
    })

    it('should call window.ga with page url and send the pageview', () => {
      analytics.trackPageView(stubs.url)

      expect(ga).toHaveBeenCalledWith('set', 'page', stubs.url)
      expect(ga).toHaveBeenCalledWith('send', 'pageview')
    })
  })
})
