// @flow
import React from 'react'

import { fetchPosts } from 'src/utils/api/blog'
import { type Post } from 'src/utils/api/blog/mutators'
import BlogPost from 'src/components/shared/BlogPost'
import Wrapper from 'src/components/shared/Wrapper'

type Props = {
  posts: Array<Post>
}

const Blog = (props: Props) => (
  <>
    <main>
      <Wrapper>
        <div className='row'>
          {props.posts.map((post) => <BlogPost post={post} key={post.slug} />)}
        </div>
      </Wrapper>
    </main>
  </>
)

export const getStaticProps = async (): Promise<{ props: Props }> => {
  const [posts] = await Promise.all([
    fetchPosts()
  ])

  return {
    props: {
      posts
    }
  }
}

export default Blog
