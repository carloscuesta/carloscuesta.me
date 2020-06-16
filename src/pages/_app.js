// @flow
import React from 'react'
import { DefaultSeo } from 'next-seo'
import 'lazysizes'
import 'lazysizes/plugins/attrchange/ls.attrchange'
import 'flexboxgrid/dist/flexboxgrid.min.css'

import 'src/utils/theme/theme.css'
import Layout from 'src/components/shared/Layout'

type Props = { Component: typeof React.Component, pageProps: Object }

const App = (props: Props) => (
  <Layout>
    <DefaultSeo
      title='Carlos Cuesta – Front End Engineer'
      description={'I\'m a Front End engineer based in Barcelona, Spain. ' +
        'Coding addicted that is focused on JavaScript. ' +
      'I like design, technology, sneakers and I ❤️ OpenSource.'}
      openGraph={{
        type: 'website',
        locale: 'en_GB',
        url: 'https://carloscuesta.me',
        site_name: 'Carlos Cuesta'
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

export default App
