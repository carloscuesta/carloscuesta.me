// @flow
import stripTags from 'striptags'
import moment from 'moment'

type Post = {
  excerpt: string,
  image: string,
  publishedAt: { format: string, value: string },
  slug: string,
  tags: Array<string>,
  title: string
}

export const transformPosts = (payload: Object): Array<Post> => payload.posts.map((post) => ({
  excerpt: `${stripTags(post.html).substring(0, 120)}...`,
  image: post.feature_image.replace('/upload/', '/upload/w_500/'),
  publishedAt: {
    format: moment(post.published_at).startOf('hour').fromNow(),
    value: post.published_at
  },
  slug: `/blog/${post.slug}`,
  tags: post.tags.map((tag) => tag.name),
  title: post.title
}))
