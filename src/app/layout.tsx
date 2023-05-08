import { Analytics } from '@vercel/analytics/react'
import localFont from 'next/font/local'

import 'src/utils/theme/theme.css'
import { trackingCode } from 'src/utils/analytics'
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
    images: [
      {
        alt: 'Carlos Cuesta',
        height: 600,
        url: 'https://carloscuesta.me/images/twitter-card.png',
        width: 1200,
      },
    ],
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
      <meta
        content="/ms-icon-144x144.png"
        key="msapplication-TileImage"
        name="msapplication-TileImage"
      />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon-180x180.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/apple-icon-76x76.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
      />
      <link rel="manifest" href="/manifest.json" />
    </head>
    <body
      className={`bg-white text-neutral-800 dark:bg-[rgb(5,5,5)] dark:text-neutral-200 ${font.className}`}
    >
      <Providers>
        <Layout>{children}</Layout>
      </Providers>
      <Analytics />
      <script dangerouslySetInnerHTML={{ __html: trackingCode }} />
    </body>
  </html>
)

export default RootLayout
