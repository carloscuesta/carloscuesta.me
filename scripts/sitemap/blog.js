const fs = require('fs')
const { SitemapStream } = require('sitemap')

const POSTS_DIRECTORY = './src/posts'
const SITEMAP_OUTPUT_DIRECTORY = './public/blog'
const SITEMAP_NAME = 'sitemap.xml'

try {
  const sitemap = new SitemapStream({
    hostname: 'https://carloscuesta.me/blog/',
    xmlns: {
      news: false,
      xhtml: false,
      image: false,
      video: false
    }
  })

  const posts = fs.readdirSync(POSTS_DIRECTORY).map((post) => post.replace('.md', ''))

  if (!fs.existsSync(SITEMAP_OUTPUT_DIRECTORY)) {
    fs.mkdirSync(SITEMAP_OUTPUT_DIRECTORY)
  }

  const stream = fs.createWriteStream(`${SITEMAP_OUTPUT_DIRECTORY}/${SITEMAP_NAME}`)

  sitemap.pipe(stream)

  posts.map((post) => {
    sitemap.write({ changefreq: 'weekly', priority: 1, url: post })
  })

  sitemap.end()

  console.log('> ✅ [Sitemap]: Blog - Generated successfully')
} catch (err) {
  console.log('> ❌ [Sitemap]: Blog - Error', err)
}
