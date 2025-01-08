import { type PostPreview } from 'src/utils/api/blog/mutators'
import Wrapper from 'src/components/Wrapper'
import SectionTitle from 'src/components/SectionTitle'
import BlogPost from './BlogPost'

type Props = {
  posts: Array<PostPreview>
}

const Writings = (props: Props) => {
  return (
    <section>
      <Wrapper>
        <SectionTitle title="Writings" href="/blog" viewAll />

        <ul className="grid gap-3 sm:gap-1">
          {props.posts.map((post) => (
            <BlogPost key={post.slug} post={post} />
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default Writings
