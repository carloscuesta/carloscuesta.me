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
  const [scrollPosition, setScrollPosition] = React.useState(0)

  const scrollTo = (action: 'next' | 'previous') => {
    const postWidth = scrollablePostsRef.current.childNodes[0].offsetWidth
    const scrollPosition = action === 'next'
      ? scrollablePostsRef.current.scrollLeft + postWidth
      : scrollablePostsRef.current.scrollLeft - postWidth

    scrollablePostsRef.current.scrollTo({
      behavior: 'smooth',
      left: scrollPosition,
      top: 0
    })

    setScrollPosition(scrollPosition)
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

        <ScrollButtons
          scrollTo={scrollTo}
          scrollPosition={scrollPosition}
          scrollPositionMaxWidth={scrollablePostsRef.current.scrollWidth - scrollablePostsRef.current.clientWidth}
        />
      </Wrapper>
    </section>
  )
}

export default Writings
