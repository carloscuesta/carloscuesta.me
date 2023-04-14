import { Analytics } from '@vercel/analytics/react'

import 'src/utils/theme/theme.css'
import { trackingCode } from 'src/utils/analytics'
import Layout from 'src/components/shared/Layout'
import Wrapper from 'src/components/shared/Wrapper'
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
      <link
        as="font"
        crossOrigin="anonymous"
        href="/fonts/inter.var.latin.woff2"
        rel="preload"
        type="font/woff2"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href="/fonts/inter.var.latin.italic.woff2"
        rel="preload"
        type="font/woff2"
      />
    </head>
    <body className="bg-white text-neutral-800 dark:bg-[rgb(5,5,5)] dark:text-neutral-200">
      <Providers>
        <Layout>{children}</Layout>
      </Providers>
      <Analytics />
      <script dangerouslySetInnerHTML={{ __html: trackingCode }} />
    </body>
  </html>
)

export default RootLayout
