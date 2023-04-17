'use client'

import { useRef, useState } from 'react'
import debounce from 'lodash.debounce'

import { type PostPreview } from 'src/utils/api/blog/mutators'
import Wrapper from 'src/components/shared/Wrapper'
import SectionTitle from 'src/components/shared/SectionTitle'
import ScrollButtons from './ScrollButtons'
import BlogPost from './BlogPost'

type Props = {
  posts: Array<PostPreview>
}

const Writings = (props: Props) => {
  const scrollablePostsRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const SCROLL_DEBOUNCE_MS_TIME = 20

  const onScroll = debounce(
    (event) => setScrollPosition(event.target.scrollLeft),
    SCROLL_DEBOUNCE_MS_TIME
  )

  const scrollTo = (action: 'next' | 'previous') => {
    if (!scrollablePostsRef.current) return

    const postWidth = (
      scrollablePostsRef.current.childNodes[0] as HTMLDivElement
    ).offsetWidth
    const scrollPosition =
      action === 'next'
        ? scrollablePostsRef.current.scrollLeft + postWidth
        : scrollablePostsRef.current.scrollLeft - postWidth

    scrollablePostsRef.current.scrollTo({
      behavior: 'smooth',
      left: scrollPosition,
      top: 0,
    })
  }

  return (
    <section>
      <style>
        {`
          .scrollablePosts::-webkit-scrollbar {
            -webkit-appearance: none;
            display: none;
          }
        `}
      </style>
      <Wrapper>
        <SectionTitle
          subTitle="The latests posts of my blog."
          title="Writings"
          viewAllLink="/blog"
        />

        <div
          data-testid="scrollablePosts"
          className="scrollablePosts -mx-2 -my-2 flex snap-x snap-mandatory overflow-x-auto"
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
          scrollPositionMaxWidth={
            Number(scrollablePostsRef?.current?.scrollWidth) -
            Number(scrollablePostsRef?.current?.clientWidth)
          }
        />
      </Wrapper>
    </section>
  )
}

export default Writings
