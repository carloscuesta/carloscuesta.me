// @flow
import React from 'react'
import groupBy from 'lodash.groupby'
import { NextSeo } from 'next-seo'

import { fetchPosts } from 'src/utils/api/blog'
import { type PostPreview } from 'src/utils/api/blog/mutators'
import BlogPost from 'src/components/shared/BlogPost'
import Wrapper from 'src/components/shared/Wrapper'
import Year from 'src/components/pages/blog/Year'

type Props = {
  posts: { [key: string]: Array<PostPreview> }
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
            <Year year={year} />

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
  const posts: Array<PostPreview> = await fetchPosts()

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
