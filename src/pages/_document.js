// @flow
import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from 'src/utils/analytics'

class Document extends NextDocument {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <meta
            content='78vmlhi_erc-UGybxcGwHyiUtf04wzYExTLa-4LoWio'
            key='google-site-verification'
            name='google-site-verification'
          />
          <meta content='#FF5252' key='msapplication-TileColor' name='msapplication-TileColor' />
          <meta content='/ms-icon-144x144.png' key='msapplication-TileImage' name='msapplication-TileImage' />
          <meta content='#FF5252' key='theme-color' name='theme-color' />
          <link rel='apple-touch-icon' sizes='114x114' href='/favicon/apple-icon-114x114.png' />
          <link rel='apple-touch-icon' sizes='120x120' href='/favicon/apple-icon-120x120.png' />
          <link rel='apple-touch-icon' sizes='144x144' href='/favicon/apple-icon-144x144.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/favicon/apple-icon-152x152.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-icon-180x180.png' />
          <link rel='apple-touch-icon' sizes='57x57' href='/favicon/apple-icon-57x57.png' />
          <link rel='apple-touch-icon' sizes='60x60' href='/favicon/apple-icon-60x60.png' />
          <link rel='apple-touch-icon' sizes='72x72' href='/favicon/apple-icon-72x72.png' />
          <link rel='apple-touch-icon' sizes='76x76' href='/favicon/apple-icon-76x76.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
          <link
            rel='icon' type='image/png' sizes='192x192' href='/favicon/
          icon-192x192.png'
          />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='96x96' href='/favicon/favicon-96x96.png' />
          <link rel='manifest' href='/manifest.json' />
          <script
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

Document.getInitialProps = (ctx) => NextDocument.getInitialProps(ctx)

export default Document
