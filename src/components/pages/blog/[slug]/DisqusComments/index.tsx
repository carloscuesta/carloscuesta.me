import { DiscussionEmbed } from 'disqus-react'
import { useInView } from 'react-intersection-observer'

type Props = {
  canonicalUrl: string
  postDisqusIdentifier: string
  postTitle: string
}

const DisqusComments = (props: Props) => {
  const [inViewRef, isInView] = useInView({
    rootMargin: '440px',
    triggerOnce: true,
  })

  return (
    <div ref={inViewRef}>
      {isInView && (
        <DiscussionEmbed
          shortname="carloscuesta"
          config={{
            identifier: props.postDisqusIdentifier,
            language: 'en',
            title: props.postTitle,
            url: props.canonicalUrl,
          }}
        />
      )}
    </div>
  )
}

export default DisqusComments
