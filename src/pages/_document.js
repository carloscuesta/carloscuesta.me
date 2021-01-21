// @flow
import React, { type Node } from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from 'src/utils/analytics'

class Document extends NextDocument {
  render (): Node {
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
          <link rel='preconnect' href='https://www.google-analytics.com' />
          <link rel='dns-prefetch' href='https://www.google-analytics.com' />
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
          <link rel='icon' type='image/png' sizes='192x192' href='/favicon/icon-192x192.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='96x96' href='/favicon/favicon-96x96.png' />
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(a,b,c){var d=a.history,e=document,f=navigator||{},g=localStorage,
                h=encodeURIComponent,i=d.pushState,k=function(){return Math.random().toString(36)},
                l=function(){return g.cid||(g.cid=k()),g.cid},m=function(r){var s=[];for(var t in r)
                r.hasOwnProperty(t)&&void 0!==r[t]&&s.push(h(t)+"="+h(r[t]));return s.join("&")},
                n=function(r,s,t,u,v,w,x){var z="https://www.google-analytics.com/collect",
                A=m({v:"1",ds:"web",aip:c.anonymizeIp?1:void 0,tid:b,cid:l(),t:r||"pageview",
                sd:c.colorDepth&&screen.colorDepth?screen.colorDepth+"-bits":void 0,dr:e.referrer||
                void 0,dt:e.title,dl:e.location.origin+e.location.pathname+e.location.search,ul:c.language?
                (f.language||"").toLowerCase():void 0,de:c.characterSet?e.characterSet:void 0,
                sr:c.screenSize?(a.screen||{}).width+"x"+(a.screen||{}).height:void 0,vp:c.screenSize&&
                a.visualViewport?(a.visualViewport||{}).width+"x"+(a.visualViewport||{}).height:void 0,
                ec:s||void 0,ea:t||void 0,el:u||void 0,ev:v||void 0,exd:w||void 0,exf:"undefined"!=typeof x&&
                !1==!!x?0:void 0});if(f.sendBeacon)f.sendBeacon(z,A);else{var y=new XMLHttpRequest;
                y.open("POST",z,!0),y.send(A)}};d.pushState=function(r){return"function"==typeof d.onpushstate&&
                d.onpushstate({state:r}),setTimeout(n,c.delay||10),i.apply(d,arguments)},n(),
                a.ma={trackEvent:function o(r,s,t,u){return n("event",r,s,t,u)},
                trackException:function q(r,s){return n("exception",null,null,null,null,r,s)}}})
                (window,"${GA_TRACKING_ID}",{anonymizeIp:true,colorDepth:true,characterSet:true,screenSize:true,language:true});
              `
            }}
          />
        </body>
      </Html>
    )
  }
}

Document.getInitialProps = (ctx) => NextDocument.getInitialProps(ctx)

export default Document
