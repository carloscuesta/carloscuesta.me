// @flow
import React, { type Node } from 'react'
import { DefaultSeo } from 'next-seo'
import Router from 'next/router'
import 'lazysizes'
import 'lazysizes/plugins/attrchange/ls.attrchange'

import 'src/utils/theme/theme.css'
import Layout from 'src/components/shared/Layout'
import * as analytics from 'src/utils/analytics'

type Props = { Component: typeof React.Component, pageProps: Object }

const App = (props: Props): Node => {
  React.useEffect(() => {
    const onRouteChange = (url) => analytics.trackPageView(url)

    Router.events.on('routeChangeComplete', onRouteChange)

    return () => Router.events.off('routeChangeComplete', onRouteChange)
  }, [])

  return (
    <Layout>
      <DefaultSeo
        title='Carlos Cuesta – Front End Engineer'
        description={'I\'m a Front End Engineer from Barcelona. ' +
          'Focused on building products with JavaScript.' +
        'Interested in design, under engineering and open source.'}
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: 'https://carloscuesta.me',
          site_name: 'Carlos Cuesta',
          images: [
            {
              alt: 'Carlos Cuesta',
              height: 600,
              url: 'https://carloscuesta.me/images/twitter-card.png',
              width: 1200
            }
          ]
        }}
        twitter={{
          handle: '@crloscuesta',
          site: '@crloscuesta',
          cardType: 'summary_large_image'
        }}
      />

      <props.Component {...props.pageProps} />
    </Layout>
  )
}

type WebVitalMetric = {
  id: string,
  label: string,
  name: string,
  value: number
}

export const reportWebVitals = (metric: WebVitalMetric) => {
  analytics.trackEvent({
    eventAction: metric.name,
    eventCategory: metric.label === 'web-vital'
      ? 'Web Vitals'
      : 'Next.js custom metric',
    eventValue: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    eventLabel: metric.id,
    nonInteraction: true
  })
}

export default App
