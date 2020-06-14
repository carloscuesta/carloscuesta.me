// @flow
import React from 'react'
import 'lazysizes'
import 'lazysizes/plugins/attrchange/ls.attrchange'
import 'flexboxgrid/dist/flexboxgrid.min.css'

import 'src/utils/theme/theme.css'
import Layout from 'src/components/shared/Layout'

type Props = { Component: typeof React.Component, pageProps: Object }

const App = (props: Props) => (
  <Layout>
    <props.Component {...props.pageProps} />
  </Layout>
)

export default App
