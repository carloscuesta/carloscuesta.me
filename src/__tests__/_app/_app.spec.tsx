import renderer from 'react-test-renderer'

import App, { reportWebVitals } from 'src/pages/_app.js'
import { trackEvent } from 'src/utils/analytics'
import * as stubs from './stubs'

jest.mock('next-seo', () => ({ DefaultSeo: 'DefaultSeo' }))

jest.mock('src/utils/analytics')

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
        // @ts-expect-error We don't need to pass router to test the App component.
        <App {...stubs.props} />
      )

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('reportWebVitals', () => {
    it('should call trackEvent with the metric as argument', () => {
      reportWebVitals(stubs.webVitalMetric)

      expect(trackEvent).toHaveBeenCalledWith({
        action: stubs.webVitalMetric.name,
        category: 'Web Vitals',
        label: stubs.webVitalMetric.id,
        value: stubs.webVitalMetric.value,
        nonInteraction: true
      })
    })
  })
})
