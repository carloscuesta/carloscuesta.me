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

export const transformPost = (payload: Object) => {
  const post = payload.posts[0]

  return {
    author: {
      name: post.primary_author.name,
      image: post.primary_author.profile_image
    },
    canonicalUrl: post.canonical_url,
    commentID: post.comment_id,
    dateModified: post.updated_at,
    datePublished: post.created_at,
    excerpt: post.excerpt,
    html: post.html,
    image: post.feature_image,
    metaContents: {
      description: post.meta_description,
      title: post.meta_title,
      openGraph: {
        description: post.og_description,
        image: post.og_image,
        title: post.og_title
      },
      twitter: {
        description: post.twitter_description,
        image: post.twitter_image,
        title: post.twitter_title
      }
    },
    readingTime: post.reading_time,
    tags: post.tags.map((tag) => tag.name),
    title: post.title
  }
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
