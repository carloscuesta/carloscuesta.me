import SandpackCSS from './components/SandpackCSS'

const SlugLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <SandpackCSS />
    {children}
  </>
)

export default SlugLayout
