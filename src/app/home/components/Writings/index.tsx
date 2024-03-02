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
