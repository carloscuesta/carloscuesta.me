// @flow
import React from 'react'
import { DefaultSeo } from 'next-seo'
import Router from 'next/router'
import 'lazysizes'
import 'lazysizes/plugins/attrchange/ls.attrchange'
import 'flexboxgrid/dist/flexboxgrid.min.css'

import 'src/utils/theme/theme.css'
import Layout from 'src/components/shared/Layout'
import * as analytics from 'src/utils/analytics'

type Props = { Component: typeof React.Component, pageProps: Object }

const App = (props: Props) => {
  React.useEffect(() => {
    const onRouteChange = (url) => analytics.trackPageView(url)

    Router.events.on('routeChangeComplete', onRouteChange)

    return () => Router.events.off('routeChangeComplete', onRouteChange)
  }, [])

  return (
    <Layout>
      <DefaultSeo
        title='Carlos Cuesta – Front End Engineer'
        description={'I\'m a Front End engineer based in Barcelona, Spain. ' +
          'Coding addicted that is focused on JavaScript. ' +
        'Interested in design, technology, sneakers and OpenSource ❤️.'}
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
  window.gtag('event', metric.name, {
    event_category: metric.label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    event_label: metric.id,
    non_interaction: true
  })
}

export default App
