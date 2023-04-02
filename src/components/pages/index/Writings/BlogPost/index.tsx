import Link from 'next/link'

import { type PostPreview } from 'src/utils/api/blog/mutators'

type Props = {
  post: PostPreview
}

const BlogPost = (props: Props) => (
  <div className="w-full sm:w-1/2 md:w-1/3 flex-none snap-start px-2 py-2">
    <Link
      href={`/blog/${props.post.slug}`}
      title={props.post.title}
      className='sm:flex rounded-lg h-full outline-none focus-visible:ring-2 ring-offset-4'
    >
      <article>
        <img
          className='w-full lazyload rounded-lg mb-3'
          data-src={props.post.images.preview.src}
          src={props.post.images.preview.lqpi}
        />

        <div className='grid gap-2'>
          <header className='font-semibold'>
            {props.post.title}
          </header>

          <p className='opacity-70 text-sm'>
            {props.post.excerpt}
          </p>
        </div>
      </article>
    </Link>
  </div>
  
)

export default BlogPost
