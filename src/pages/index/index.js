// @flow
import React from 'react'

import { fetchPosts } from 'src/utils/api/ghost'
import { type Post } from 'src/utils/api/ghost/mutators'
import Header from './components/Header'
import Biography from './components/Biography'
import Writings from './components/Writings'

type Props = {
  posts: Array<Post>
}

const Index = (props: Props) => (
  <>
    <Header />
    <main>
      <Biography />
      <Writings posts={props.posts} />
    </main>
  </>
)

export const getServerSideProps = async () => {
  const [posts] = await Promise.all([
    fetchPosts()
  ])

  return {
    props: {
      posts
    }
  }
}

export default Index
