import Link from 'next/link'
import { Suspense } from 'react'

import ViewsCount from 'src/components/ViewsCount'
import { type PostPreview } from 'src/utils/api/blog/mutators'

type Props = {
  post: PostPreview
}

const BlogPost = (props: Props) => (
  <li className="-mx-1.5">
    <Link
      href={`/blog/${props.post.slug}`}
      title={props.post.title}
      className="block p-1.5 h-full w-full rounded-md transition-all focus-within:bg-neutral-100 hover:bg-neutral-100 dark:focus-within:bg-neutral-900 dark:hover:bg-neutral-900 outline-none focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-500 text-[15px]"
      tabIndex={0}
    >
      <article className="flex flex-col-reverse sm:flex-row sm:items-baseline sm:gap-3">
        <time
          className="opacity-60 sm:w-[6.25rem]"
          dateTime={props.post.datePublished.value}
          aria-label={`Written ${props.post.datePublished.formatDate}`}
        >
          {`${props.post.datePublished.formatMonthDay}, ${new Date(props.post.datePublished.value).getFullYear()}`}
        </time>

        <div className="grid flex-1 grid-flow-col items-baseline justify-between gap-10 md:items-center">
          <header className="font-medium">{props.post.title}</header>
          <p className="font-mono opacity-60 text-sm">
            <Suspense>
              <ViewsCount slug={props.post.slug} views={props.post.views} />
            </Suspense>
          </p>
        </div>
      </article>
    </Link>
  </li>
)

export default BlogPost
