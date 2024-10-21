'use client'

import type { JSX } from 'react'
import { ThemeProvider } from 'next-themes'

const Providers = ({ children }: { children: JSX.Element[] | JSX.Element }) => (
  <ThemeProvider attribute="class">{children}</ThemeProvider>
)

export default Providers
