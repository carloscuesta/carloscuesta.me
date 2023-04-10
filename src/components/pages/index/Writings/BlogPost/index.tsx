import Link from 'next/link'

import { type PostPreview } from 'src/utils/api/blog/mutators'

type Props = {
  post: PostPreview
}

const BlogPost = (props: Props) => (
  <div className="w-full flex-none snap-start px-2 py-2 sm:w-1/2 md:w-1/3">
    <Link
      href={`/blog/${props.post.slug}`}
      title={props.post.title}
      className="h-full rounded-lg outline-none ring-offset-4 focus-visible:ring-2 sm:flex"
    >
      <article>
        <img
          alt=""
          className="lazyload mb-3 w-full rounded-lg"
          data-src={props.post.images.preview.src}
          src={props.post.images.preview.lqpi}
        />

        <div className="grid gap-2">
          <header className="font-semibold">{props.post.title}</header>

          <p className="text-sm opacity-70">{props.post.excerpt}</p>
        </div>
      </article>
    </Link>
  </div>
)

export default BlogPost
