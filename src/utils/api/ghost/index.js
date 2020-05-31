// @flow
import callApi, { type callApiOptions } from 'src/utils/api/callApi'
import { transformPosts } from './mutators'

const ghostApiClient = (options: callApiOptions) => callApi({
  cacheKey: options.cacheKey,
  mutator: options.mutator,
  url: `https://carloscuesta.me/blog/ghost/api/v3/content${options.url}&key=${process.env.GHOST_CONTENT_API_KEY}`
})

export const fetchPosts = () => ghostApiClient({
  cacheKey: 'posts',
  mutator: transformPosts,
  url: '/posts?limit=8&include=tags'
})
