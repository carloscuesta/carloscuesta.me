import { Analytics } from '@vercel/analytics/react'
import localFont from 'next/font/local'

import 'src/utils/theme/theme.css'
import cn from 'src/utils/cn'
import Layout from 'src/components/Layout'
import Providers from './providers'

export const metadata = {
  title: {
    absolute: 'Carlos Cuesta – Front End Engineer',
    template: 'Carlos Cuesta – %s',
  },
  description:
    "I'm a Front End Engineer based in Barcelona, that loves to code and " +
    'build products with a delightful user experience.' +
    'I love working in between product, engineering and developer experience.',
  metadataBase: new URL('https://carloscuesta.me'),
  openGraph: {
    type: 'website',
    locale: 'en-US',
    siteName: 'Carlos Cuesta',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@crloscuesta',
  },
  verification: {
    google: '78vmlhi_erc-UGybxcGwHyiUtf04wzYExTLa-4LoWio',
  },
}

const font = localFont({
  src: [
    {
      path: '../../public/fonts/inter.var.latin.woff2',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter.var.latin.italic.woff2',
      style: 'italic',
    },
  ],
  weight: '100 900',
  display: 'swap',
  declarations: [
    {
      prop: 'unicode-range',
      value:
        'U+00??, U+0131, U+0152-0153, U+02bb-02bc, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2122, U+2191, U+2193, U+2212, U+2215, U+feff, U+fffd',
    },
  ],
})

const RootLayout = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element
}) => (
  <html suppressHydrationWarning lang="en">
    <head>
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon/icon.png" sizes="any" />
      <link rel="apple-touch-icon" href="/favicon/apple-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </head>
    <body
      className={cn(
        'bg-white text-neutral-800 dark:bg-[rgb(5,5,5)] dark:text-neutral-200',
        font.className,
      )}
    >
      <Providers>
        <Layout>{children}</Layout>
      </Providers>
      <Analytics />
    </body>
  </html>
)

export default RootLayout
