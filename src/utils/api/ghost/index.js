// @flow
import callApi, { type callApiOptions } from 'src/utils/api/callApi'
import { transformPost, transformPosts } from './mutators'

const ghostApiClient = (options: callApiOptions) => {
  const url = new URL(
    `https://carloscuesta.me/blog/ghost/api/v3/content${options.url}`
  )

  url.searchParams.append('key', process.env.GHOST_CONTENT_API_KEY)

  return callApi({
    cacheKey: options.cacheKey,
    mutator: options.mutator,
    url: url.href
  })
}

export const fetchPosts = () => ghostApiClient({
  cacheKey: 'posts',
  mutator: transformPosts,
  url: '/posts?limit=8&include=tags'
})

export const fetchPost = (slug: string) => ghostApiClient({
  cacheKey: slug,
  mutator: transformPost,
  url: `/posts/slug/${slug}?include=authors,tags`
})
