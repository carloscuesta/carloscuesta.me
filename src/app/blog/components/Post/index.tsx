import { Suspense } from 'react'
import Link from 'next/link'

import { type PostPreview } from 'src/utils/api/blog/mutators'
import ViewsCount from 'src/components/ViewsCount'

const Post = ({ post }: { post: PostPreview }) => (
  <li
    key={post.slug}
    className="-mx-3 rounded-lg transition-all focus-within:bg-neutral-100 hover:bg-neutral-100 dark:focus-within:bg-neutral-900 dark:hover:bg-neutral-900"
  >
    <Link
      href={`/blog/${post.slug}`}
      title={post.title}
      className="flex flex-col-reverse gap-1 rounded-lg px-3 py-2 outline-hidden focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-500 sm:flex-row sm:gap-2 sm:py-2"
      tabIndex={0}
    >
      <time
        className="opacity-60 sm:w-20"
        dateTime={post.datePublished.value}
        aria-label={`Written ${post.datePublished.formatDate}`}
      >
        {post.datePublished.formatMonthDay}
      </time>

      <div className="grid flex-1 grid-flow-col items-baseline justify-between gap-10 md:items-center">
        <p className="font-medium">{post.title}</p>
        <p className="font-mono text-sm opacity-60">
          <Suspense>
            <ViewsCount slug={post.slug} views={post.views} />
          </Suspense>
        </p>
      </div>
    </Link>
  </li>
)

export default Post
