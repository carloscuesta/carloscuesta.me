// @flow
import React from 'react'

import { type PostPreview } from 'src/utils/api/blog/mutators'
import Wrapper from 'src/components/shared/Wrapper'
import BlogPost from 'src/components/shared/BlogPost'
import SectionTitle from '../SectionTitle'
import styles from './styles.module.css'

type Props = {
  posts: Array<PostPreview>
}

const Writings = (props: Props) => (
  <section>
    <Wrapper>
      <SectionTitle
        title='Writings'
        subTitle='The latests posts of my blog.'
      />

      <div className={`row ${styles.scrollablePosts}`}>
        {props.posts.map((post) => (
          <BlogPost key={post.slug} post={post} />
        ))}
      </div>
    </Wrapper>
  </section>
)

export default Writings
