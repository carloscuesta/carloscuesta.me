// @flow
import type { Node } from 'react'

import NavigationMenu from './NavigationMenu'
import Footer from './Footer'

type Props = { children: Node }

const Layout = (props: Props): Node => (
  <>
    <NavigationMenu />
    {props.children}
    <Footer />
  </>
)

export default Layout
