import Link from 'next/link'
import { Suspense } from 'react'

import ViewsCount from 'src/components/ViewsCount'
import { type PostPreview } from 'src/utils/api/blog/mutators'

type Props = {
  post: PostPreview
  isImageLoadedWithPriority: boolean
}

const BlogPost = (props: Props) => (
  <Link
    href={`/blog/${props.post.slug}`}
    title={props.post.title}
    className="h-full w-full rounded-md outline-none ring-offset-4 focus-visible:ring-2"
  >
    <article>
      <div className="grid grid-flow-col items-center justify-between">
        <div className="grid grid-flow-col gap-2 items-center">
          <time
            className="opacity-60 sm:w-28"
            dateTime={props.post.datePublished.value}
            aria-label={`Written ${props.post.datePublished.formatDate}`}
          >
            {`${props.post.datePublished.formatMonthDay}, ${new Date(props.post.datePublished.value).getFullYear()}`}
          </time>
          <header className="font-medium">{props.post.title}</header>
        </div>

        <p className="font-mono text-sm opacity-60">
          <Suspense>
            <ViewsCount slug={props.post.slug} views={props.post.views} />
          </Suspense>
        </p>
      </div>
    </article>
  </Link>
)

export default BlogPost
