// @flow
import React from 'react'
import groupBy from 'lodash.groupby'
import { NextSeo } from 'next-seo'

import { fetchPosts } from 'src/utils/api/blog'
import { type Post } from 'src/utils/api/blog/mutators'
import BlogPost from 'src/components/shared/BlogPost'
import Wrapper from 'src/components/shared/Wrapper'

type Props = {
  posts: { [key: string]: Array<Post> }
}

const Blog = (props: Props) => (
  <>
    <NextSeo
      canonical='https://carloscuesta.me/blog'
      title='Carlos Cuesta – Front End Engineer – Blog'
    />
    <main>
      <Wrapper>
        {Object.keys(props.posts).sort(() => -1).map((year: string) => (
          <div className='row' key={year}>
            <div className='col-xs-12'>
              <h3>{year}</h3>
            </div>

            {props.posts[year].map((post) => (
              <BlogPost post={post} key={post.slug} />
            ))}
          </div>
        ))}
      </Wrapper>
    </main>
  </>
)

export const getStaticProps = async (): Promise<{ props: Props }> => {
  const posts: Array<Post> = await fetchPosts()

  return {
    props: {
      posts: groupBy(
        posts,
        (post) => new Date(post.datePublished.value).getFullYear()
      )
    }
  }
}

export default Blog
