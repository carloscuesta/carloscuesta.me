import { Feed } from 'feed'
import { fetchPosts } from 'src/utils/api/blog'

export async function GET() {
  const posts = await fetchPosts()
  const id = 'https://carloscuesta.me'
  const author = {
    name: 'Carlos Cuesta',
    link: id,
  }

  const feed = new Feed({
    author,
    copyright: `Carlos Cuesta © ${new Date().getFullYear()}`,
    description: 'Explore my collection of writings and thoughts',
    favicon: `${id}/favicon/favicon.ico`,
    feedLinks: { rss2: `${id}/blog/rss.xml` },
    id,
    image: `${id}/favicon/icon.png`,
    language: 'en',
    link: `${id}/blog`,
    title: 'Carlos Cuesta',
  })

  posts.forEach((post) => {
    feed.addItem({
      author: [author],
      date: new Date(post.datePublished.value),
      description: post.excerpt,
      guid: `${id}/blog/${post.slug}`,
      id: post.slug,
      link: `${id}/blog/${post.slug}`,
      title: post.title,
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'max-age=259200; stale-while-revalidate=86400',
    },
  })
}
