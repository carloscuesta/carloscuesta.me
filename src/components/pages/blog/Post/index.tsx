import Link from 'next/link'

import { type PostPreview } from 'src/utils/api/blog/mutators'

const Post = ({ post }: { post: PostPreview }) => (
  <li key={post.slug} className='rounded-lg font-semibold transition-all hover:bg-neutral-100 focus-within:bg-neutral-100 dark:hover:bg-neutral-900 dark:focus-within:bg-neutral-900 -mx-3'>
    <Link
      href={`/blog/${post.slug}`}
      title={post.title}
      className='rounded-lg flex flex-col-reverse gap-1 sm:flex-row sm:gap-3 px-3 py-3 sm:py-4 outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-500'
    > 
      <time
        className='opacity-60 sm:w-20'
        dateTime={post.datePublished.value}
        aria-label={`Written ${post.datePublished.formatDate}`}
      >
        {post.datePublished.formatMonthDay}
      </time>

      <p>{post.title}</p>
    </Link>
  </li>
)

export default Post
