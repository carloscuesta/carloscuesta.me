import type { JSX } from 'react'

import NavigationMenu from './NavigationMenu'
import Footer from './Footer'

type Props = { children: JSX.Element[] | JSX.Element }

const Layout = (props: Props) => (
  <>
    <NavigationMenu />
    {props.children}
    <Footer />
  </>
)

export default Layout
