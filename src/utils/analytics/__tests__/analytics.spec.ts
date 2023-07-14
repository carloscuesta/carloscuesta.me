import * as analytics from '../index'
import * as stubs from './stubs'

describe('analytics', () => {
  it('should match analytics module', () => {
    expect(analytics).toMatchSnapshot()
  })

  describe('trackingCode', () => {
    it('should match trackingCode', () => {
      expect(analytics.trackingCode).toMatchSnapshot()
    })
  })

  describe('trackEvent', () => {
    const ma = { trackEvent: jest.fn() }

    beforeAll(() => {
      window.ma = ma
    })

    it('should call window.ga with event object', () => {
      analytics.trackEvent(stubs.event)

      expect(ma.trackEvent).toHaveBeenCalledWith(
        stubs.event.category,
        stubs.event.action,
        stubs.event.label,
        stubs.event.value,
        stubs.event.nonInteraction,
      )
    })
  })
})
