// @flow
import React, { type Element } from 'react'

import { type PostPreview } from 'src/utils/api/blog/mutators'
import Wrapper from 'src/components/shared/Wrapper'
import BlogPost from 'src/components/shared/BlogPost'
import SectionTitle from 'src/components/shared/SectionTitle'
import ScrollButtons from './ScrollButtons'
import styles from './styles.module.css'

type Props = {
  posts: Array<PostPreview>
}

const Writings = (props: Props): Element<'section'> => {
  const scrollablePostsRef: Object = React.useRef({ current: {} })
  const [postWidth, setPostWidth] = React.useState(0)

  React.useEffect(() => {
    setPostWidth(scrollablePostsRef.current.childNodes[0].offsetWidth)
  }, [])

  const scrollTo = (action: 'next' | 'previous') => {
    setPostWidth(scrollablePostsRef.current.childNodes[0].offsetWidth)

    scrollablePostsRef.current.scrollTo({
      behavior: 'smooth',
      left: action === 'next'
        ? scrollablePostsRef.current.scrollLeft + postWidth
        : scrollablePostsRef.current.scrollLeft - postWidth,
      top: 0
    })
  }

  return (
    <section>
      <Wrapper>
        <SectionTitle
          isCentered
          subTitle='The latests posts of my blog.'
          title='Writings'
        />

        <div ref={scrollablePostsRef} className={`row ${styles.scrollablePosts}`}>
          {props.posts.map((post) => (
            <BlogPost key={post.slug} post={post} />
          ))}
        </div>

        <ScrollButtons scrollTo={scrollTo} />
      </Wrapper>
    </section>
  )
}

export default Writings
