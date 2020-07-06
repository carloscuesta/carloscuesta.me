const fs = require('fs')
const { SitemapStream } = require('sitemap')

const POSTS_DIRECTORY = './src/posts'
const SITEMAP_OUTPUT_DIRECTORY = './public'
const SITEMAP_NAME = 'sitemap.xml'
const PAGES = ['/', '/about', '/blog']

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

  const posts = fs.readdirSync(POSTS_DIRECTORY).map((post) => post.replace('.md', ''))

  if (!fs.existsSync(SITEMAP_OUTPUT_DIRECTORY)) {
    fs.mkdirSync(SITEMAP_OUTPUT_DIRECTORY)
  }

  const stream = fs.createWriteStream(`${SITEMAP_OUTPUT_DIRECTORY}/${SITEMAP_NAME}`)

  sitemap.pipe(stream)

  PAGES.map((page) => {
    sitemap.write({ changefreq: 'daily', priority: 0.8, url: page })
  })

  posts.map((post) => {
    sitemap.write({ changefreq: 'daily', priority: 1, url: `/blog/${post}` })
  })

  sitemap.end()

  console.log('> ✅ [Sitemap]: Generated successfully')
} catch (err) {
  console.log('> ❌ [Sitemap]: Error', err)
}
