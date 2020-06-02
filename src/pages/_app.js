// @flow
import React, { type Node } from 'react'
import 'flexboxgrid/dist/flexboxgrid.min.css'

import 'src/utils/theme/theme.css'

type Props = { Component: typeof React.Component, pageProps: Object }

const App = (props: Props) => (
  <>
    <props.Component {...props.pageProps} />
  </>
)

export default App
