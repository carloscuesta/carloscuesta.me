// @flow
import React from 'react'

import { fetchPosts } from 'src/utils/api/ghost'
import { fetchRepositories } from 'src/utils/api/github'
import { type Post } from 'src/utils/api/ghost/mutators'
import { type Repository } from 'src/utils/github/mutators'
import Header from './components/Header'
import Biography from './components/Biography'
import Writings from './components/Writings'
import OpenSource from './components/OpenSource'

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
