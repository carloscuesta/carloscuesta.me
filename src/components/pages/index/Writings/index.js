// @flow
import { type Element, useRef, useState } from 'react'
import debounce from 'lodash.debounce'

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
  const scrollablePostsRef: Object = useRef({ current: {} })
  const [scrollPosition, setScrollPosition] = useState(0)
  const SCROLL_DEBOUNCE_MS_TIME: number = 20

  const onScroll = debounce(
    (event: Object) => setScrollPosition(event.target.scrollLeft),
    SCROLL_DEBOUNCE_MS_TIME
  )

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
  }

  return (
    <section>
      <Wrapper>
        <SectionTitle
          subTitle='The latests posts of my blog.'
          title='Writings'
          viewAllLink='/blog'
        />

        <div
          className={`row ${styles.scrollablePosts}`}
          onScroll={onScroll}
          ref={scrollablePostsRef}
        >
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
