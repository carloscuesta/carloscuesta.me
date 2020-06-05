// @flow
import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

import { fetchPost } from 'src/utils/api/ghost'
import Wrapper from 'src/components/Wrapper'
import Header from './components/Header'

const Post = (props) => (
  <article>
    <Header image={props.post.image} />

    <main>
      <Wrapper>
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
