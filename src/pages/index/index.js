// @flow
import React from 'react'

import { fetchPosts } from 'src/utils/api/ghost'
import { fetchRepositories } from 'src/utils/api/github'
import { type Post } from 'src/utils/api/blog/mutators'
import { type Repository } from 'src/utils/api/github/mutators'
import Header from 'src/components/pages/index/Header'
import Biography from 'src/components/pages/index/Biography'
import Writings from 'src/components/pages/index/Writings'
import OpenSource from 'src/components/pages/index/OpenSource'

type Props = {
  posts: Array<Post>,
  repositories: Array<Repository>
}

const Index = (props: Props) => (
  <>
    <Header />
    <main>
      <Biography />
      <Writings posts={props.posts} />
      <OpenSource repositories={props.repositories} />
    </main>
  </>
)

export const getServerSideProps = async () => {
  const [posts, repositories] = await Promise.all([
    fetchPosts(),
    fetchRepositories()
  ])

  return {
    props: {
      posts,
      repositories
    }
  }
}

export default Index
