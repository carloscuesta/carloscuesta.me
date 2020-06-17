// @flow
import React from 'react'
import Head from 'next/head'

import { getPostSlugs, fetchPost } from 'src/utils/api/blog'
import { type Post } from 'src/utils/api/blog/mutators'
import Wrapper from 'src/components/shared/Wrapper'
import Header from 'src/components/pages/blog/[slug]/Header'

type Props = {
  post: Post
}

const Article = (props: Props) => (
  <article className='postDetail'>
    <Head>
      <link rel='preload' href='/prism/prism.css' as='style' />
      <link rel='preload' href='/prism/prism.js' as='script' />
      <link href='/prism/prism.css' rel='stylesheet' type='text/css' />
      <script src='/prism/prism.js' type='text/javascript' />
    </Head>

    <Header image={props.post.image} />

    <main>
      <Wrapper isCompressed>
        <header>
          <h1>{props.post.title}</h1>

          <time dateTime={props.post.datePublished.value}>
            {props.post.datePublished.formatDate}
          </time>
        </header>

        <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
      </Wrapper>
    </main>
  </article>
)

export const getStaticPaths = () => ({
  paths: getPostSlugs().map<{ params: { slug: string }}>((slug: string) => ({ params: { slug } })),
  fallback: false
})

export const getStaticProps = async ({ params }: { params: { slug: string }}) => {
  const post = await fetchPost(params.slug)

  return {
    props: {
      post
    }
  }
}

export default Article
