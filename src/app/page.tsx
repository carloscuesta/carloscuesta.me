import { type Metadata } from 'next'

import { fetchPosts } from 'src/utils/api/blog'
import { fetchRepositories } from 'src/utils/api/github'
import Home from './home'

export const metadata: Metadata = {
  metadataBase: null,
  alternates: {
    canonical: 'https://carloscuesta.me',
  },
}

const Index = async () => {
  const { posts, repositories } = await getData()

  return <Home repositories={repositories} posts={posts} />
}

export const revalidate = 3600

const getData = async () => {
  const [posts, repositories] = await Promise.all([
    fetchPosts(),
    fetchRepositories(),
  ])

  return {
    posts: posts.slice(0, 6),
    repositories: repositories
      .sort((x, y) => y.stars.value - x.stars.value)
      .slice(0, 6),
  }
}

export default Index
