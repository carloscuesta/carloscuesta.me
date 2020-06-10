// @flow
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import remarkHtml from 'remark-html'
import remarkExternalLinks from 'remark-external-links'

import { type Post, transformPost } from './mutators'

const POSTS_DIRECTORY: string = join(process.cwd(), 'src/posts')

export const getPostSlugs = (): Array<string> => fs.readdirSync(POSTS_DIRECTORY)
  .map((post: string) => post.replace('.md', ''))

export const fetchPost = async (slug: string): Promise<Post> => {
  const post = fs.readFileSync(join(POSTS_DIRECTORY, `${slug}.md`), 'utf8')
  const { data, content } = matter(post)
  const html = await remark()
    .use(remarkExternalLinks)
    .use(remarkHtml)
    .process(content)

  return transformPost({ data, html, slug })
}

export const fetchPosts = async (): Promise<Array<Post>> => {
  const posts: Array<Post> = await Promise.all(
    getPostSlugs().map((slug) => fetchPost(slug))
  )

  return posts.sort((x, y) => new Date(y.datePublished.value) - new Date(x.datePublished.value))
}
