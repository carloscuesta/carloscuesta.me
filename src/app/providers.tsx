'use client'

import 'lazysizes'
import 'lazysizes/plugins/attrchange/ls.attrchange'
import { ThemeProvider } from 'next-themes'

const Providers = ({ children }: { children: JSX.Element[] | JSX.Element }) => (
  <ThemeProvider attribute="class">{children}</ThemeProvider>
)

export default Providers
