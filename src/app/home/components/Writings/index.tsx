'use client'

import { useRef, useState } from 'react'
import debounce from 'lodash.debounce'

import { type PostPreview } from 'src/utils/api/blog/mutators'
import Wrapper from 'src/components/Wrapper'
import SectionTitle from 'src/components/SectionTitle'
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
    SCROLL_DEBOUNCE_MS_TIME,
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
      <Wrapper>
        <SectionTitle
          subTitle="The latests posts of my blog."
          title="Writings"
        />

        <div className="grid gap-3">
          {props.posts.map((post, index) => (
            <BlogPost
              isImageLoadedWithPriority={[0, 1, 2].includes(index)}
              key={post.slug}
              post={post}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Writings
