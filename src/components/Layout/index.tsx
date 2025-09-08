import NavigationMenu from './NavigationMenu'
import Footer from './Footer'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => (
  <>
    <NavigationMenu />
    {props.children}
    <Footer />
  </>
)

export default Layout
