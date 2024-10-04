import fs from 'fs'
import { join } from 'path'
import truncate from 'lodash.truncate'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGFM from 'remark-gfm'
import remarkToc from 'remark-toc'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'
import rehypeMinify from 'rehype-preset-minify'
import rehypeWrap from 'rehype-wrap-all'

import callApi from 'src/utils/api/callApi'
import {
  type Post,
  type PostPreview,
  transformPost,
  transformPostViews,
} from './mutators'

const POSTS_DIRECTORY = join(process.cwd(), 'src/posts')

export const getPostSlugs = (): Array<string> =>
  fs.readdirSync(POSTS_DIRECTORY).map((post: string) => post.replace('.md', ''))

export const fetchPost = async (slug: string): Promise<Post> => {
  const post = fs.readFileSync(join(POSTS_DIRECTORY, `${slug}.md`), 'utf8')
  const { data, content } = matter(post)
  const html = await unified()
    .use(remarkParse)
    .use(remarkGFM)
    .use(remarkToc, { tight: true, maxDepth: 4 })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAutoLinkHeadings, { behavior: 'wrap' })
    .use(rehypeExternalLinks)
    .use(rehypePrettyCode, {
      theme: {
        dark: require('sprinkles-vscode/themes/sprinkles-dark.json'),
        light: require('sprinkles-vscode/themes/sprinkles-light.json'),
      },
      defaultLang: 'plaintext',
    })
    .use(rehypeWrap, { selector: 'table', wrapper: 'div.responsiveTable' })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(rehypeMinify)
    .process(content)

  return await transformPost({ data, html, slug })
}

export const fetchPosts = async (): Promise<Array<PostPreview>> => {
  const posts: Array<Post> = await Promise.all(
    getPostSlugs().map((slug) => fetchPost(slug)),
  )
  const views = await callApi({
    url: 'https://carloscuesta.me/api/views',
    mutator: transformPostViews,
  })

  return posts
    .sort((x, y) => {
      return (
        Number(new Date(y.datePublished.value)) -
        Number(new Date(x.datePublished.value))
      )
    })
    .map((post) => ({
      datePublished: post.datePublished,
      excerpt: truncate(post.excerpt, {
        length: 100,
        separator: ' ',
      }),
      images: post.images,
      slug: post.slug,
      title: post.title,
      views: views[post.slug],
    }))
}
