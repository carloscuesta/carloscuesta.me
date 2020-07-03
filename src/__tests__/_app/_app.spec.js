import renderer from 'react-test-renderer'
import Router from 'next/router'

import App, { reportWebVitals } from 'src/pages/_app.js'
import { trackEvent } from 'src/utils/analytics'
import * as stubs from './stubs'

jest.mock('next-seo', () => ({ DefaultSeo: 'DefaultSeo' }))

jest.mock('src/utils/analytics')

jest.mock('next/router', () => ({
  pathname: '',
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn()
  }
}))

Router.useRouter = () => ({
  pathname: '',
  events: {
    off: jest.fn(),
    on: jest.fn(),
    emit: jest.fn()
  }
})

/*
  I'm mocking the components since those are unit tested.
  So there's no point to test the rendering of them twice.
  It's more easier to manage little snapshots than big ones.
*/

jest.mock('src/components/shared/Layout', () => 'Layout')

describe('_app', () => {
  describe('page', () => {
    it('should match App page', () => {
      const wrapper = renderer.create(
        <App {...stubs.props} />
      )

      expect(wrapper).toMatchSnapshot()
    })

    it('should subscribe on mount to Router.events routeChangeComplete', () => {
      renderer.create(
        <App {...stubs.props} />
      )

      expect(Router.events.on).toHaveBeenCalledWith(
        'routeChangeComplete',
        expect.any(Function)
      )
    })

    it('should unsubscribe on unmount to Router.events routeChangeComplete', () => {
      const wrapper = renderer.create(
        <App {...stubs.props} />
      )

      wrapper.unmount()

      expect(Router.events.off).toHaveBeenCalledWith(
        'routeChangeComplete',
        expect.any(Function)
      )
    })
  })

  describe('reportWebVitals', () => {
    it('should call trackEvent with the metric as argument', () => {
      reportWebVitals(stubs.webVitalMetric)

      expect(trackEvent).toHaveBeenCalledWith({
        eventAction: stubs.webVitalMetric.name,
        eventCategory: 'Web Vitals',
        eventLabel: stubs.webVitalMetric.id,
        eventValue: stubs.webVitalMetric.value,
        nonInteraction: true
      })
    })
  })
})
