import fs from 'fs'
import { join } from 'path'
import truncate from 'lodash.truncate'

import callApi from 'src/utils/api/callApi'
import {
  type Post,
  type PostPreview,
  transformPost,
  transformPostViews,
} from './mutators'

const POSTS_DIRECTORY = join(process.cwd(), 'src/posts')
const POST_EXTENSION = '.mdx'

export const getPostSlugs = (): Array<string> =>
  fs
    .readdirSync(POSTS_DIRECTORY)
    .map((post: string) => post.replace(POST_EXTENSION, ''))

export const fetchPost = async (slug: string): Promise<Post> => {
  const {
    frontmatter,
    default: source,
    readingTime,
  } = await import(`src/posts/${slug}${POST_EXTENSION}`)

  return await transformPost({
    data: frontmatter,
    source,
    slug,
    readingTime: readingTime.text,
  })
}

export const fetchPosts = async (): Promise<Array<PostPreview>> => {
  const posts = await Promise.all(getPostSlugs().map((slug) => fetchPost(slug)))
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
