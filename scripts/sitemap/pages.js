const fs = require('fs')
const { SitemapStream } = require('sitemap')

const SITEMAP_OUTPUT_DIRECTORY = './public'
const SITEMAP_NAME = 'sitemap.xml'

try {
  const sitemap = new SitemapStream({
    hostname: 'https://carloscuesta.me',
    xmlns: {
      news: false,
      xhtml: false,
      image: false,
      video: false
    }
  })

  const stream = fs.createWriteStream(`${SITEMAP_OUTPUT_DIRECTORY}/${SITEMAP_NAME}`)
  const PAGES = ['/']

  sitemap.pipe(stream)

  PAGES.map((page) => {
    sitemap.write({ changefreq: 'weekly', priority: 1, url: page })
  })

  sitemap.end()

  console.log('> ✅ [Sitemap]: Pages - Generated successfully')
} catch (err) {
  console.log('> ❌ [Sitemap]: Pages - Error', err)
}
