import type { JSX } from 'react'
import SandpackCSS from './components/SandpackCSS'

const SlugLayout = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element
}) => (
  <>
    <SandpackCSS />
    {children}
  </>
)

export default SlugLayout
