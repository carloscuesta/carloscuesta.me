import { type Metadata } from 'next'
import groupBy from 'lodash.groupby'

import { fetchPosts } from 'src/utils/api/blog'
import { fetchViews } from 'src/utils/api/blog/views'
import Wrapper from 'src/components/Wrapper'
import PageTitle from 'src/components/PageTitle'
import Year from './components/Year'
import Post from './components/Post'

export const dynamic = 'error'

const getData = async () => {
  const posts = await fetchPosts()
  const views = await fetchViews()

  return {
    posts: groupBy(posts, (post) =>
      new Date(post.datePublished.value).getFullYear(),
    ),
    views,
  }
}

export const metadata: Metadata = {
  title: 'Blog',
  alternates: {
    canonical: '/blog',
  },
}

const Blog = async () => {
  const { posts, views } = await getData()

  return (
    <Wrapper>
      <main>
        <PageTitle title="Blog" />
        <div className="grid gap-8">
          {Object.keys(posts)
            .sort(() => -1)
            .map((year) => (
              <section key={year}>
                <Year year={year} />

                <ul className="grid grid-flow-row gap-3">
                  {posts[year].map((post) => (
                    <Post
                      key={post.slug}
                      post={post}
                      views={views[post.slug]}
                    />
                  ))}
                </ul>
              </section>
            ))}
        </div>
      </main>
    </Wrapper>
  )
}

export default Blog
