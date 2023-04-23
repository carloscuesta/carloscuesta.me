import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import 'lazysizes'
import 'lazysizes/plugins/attrchange/ls.attrchange'

import 'src/utils/theme/theme.css'
import Layout from 'src/components/Layout'
import { trackEvent } from 'src/utils/analytics'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('src/mocks')
}

const App = (props: AppProps) => (
  <ThemeProvider attribute="class">
    <Layout>
      <DefaultSeo
        title="Carlos Cuesta – Front End Engineer"
        description={
          "I'm a Front End Engineer from Barcelona. " +
          'Focused on building products with JavaScript. ' +
          'Interested in design, under engineering and open source.'
        }
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
              width: 1200,
            },
          ],
        }}
        twitter={{
          handle: '@crloscuesta',
          site: '@crloscuesta',
          cardType: 'summary_large_image',
        }}
      />
      <props.Component {...props.pageProps} />
      <Analytics />
    </Layout>
  </ThemeProvider>
)

type WebVitalMetric = {
  id: string
  label: string
  name: string
  value: number
}

export const reportWebVitals = (metric: WebVitalMetric) => {
  trackEvent({
    action: metric.name,
    category:
      metric.label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(
      metric.name === 'CLS' ? metric.value * 1000 : metric.value
    ),
    label: metric.id,
    nonInteraction: true,
  })
}

export default App
