// @flow
import React from 'react'
import Head from 'next/head'
import { DiscussionEmbed } from 'disqus-react'

import { fetchPost } from 'src/utils/api/ghost'
import Wrapper from 'src/components/shared/Wrapper'
import Header from 'src/components/pages/blog/[slug]/Header'

const Post = (props) => (
  <article>
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
        </header>

        <div dangerouslySetInnerHTML={{ __html:  props.post.html }} />

        <DiscussionEmbed
          shortname='carloscuesta'
          config={{
            identifier: props.post.commentID,
            title: props.post.title,
            url: props.post.canonicalUrl
          }}
        />
      </Wrapper>
    </main>
  </article>
)

export const getServerSideProps = async ({ params }) => {
  const post = await fetchPost(params.slug)

  return {
    props: {
      post,
    }
  }
}

export default Post
