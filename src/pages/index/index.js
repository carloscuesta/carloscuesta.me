// @flow
import React from 'react'
import { NextSeo, SocialProfileJsonLd } from 'next-seo'

import { fetchPosts } from 'src/utils/api/blog'
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
    <NextSeo canonical='https://carloscuesta.me' />
    <SocialProfileJsonLd
      type='Person'
      name='Carlos Cuesta'
      url='https://carloscuesta.me'
      sameAs={[
        'http://instagram.com/crloscuesta',
        'https://github.com/carloscuesta',
        'https://twitter.com/crloscuesta',
        'https://www.linkedin.com/in/crloscuesta'
      ]}
    />
    <Header />
    <main>
      <Biography />
      <Writings posts={props.posts} />
      <OpenSource repositories={props.repositories} />
    </main>
  </>
)

export const getStaticProps = async (): Promise<{ props: Props }> => {
  const [posts, repositories] = await Promise.all([
    fetchPosts(),
    fetchRepositories()
  ])

  return {
    props: {
      posts: posts.slice(0, 6),
      repositories
    }
  }
}

export default Index
