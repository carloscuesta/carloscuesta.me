import { GetStaticProps, InferGetStaticPropsType } from 'next'
import groupBy from 'lodash.groupby'
import { NextSeo } from 'next-seo'

import { fetchPosts } from 'src/utils/api/blog'
import { type PostPreview } from 'src/utils/api/blog/mutators'
import PageTitle from 'src/components/shared/PageTitle'
import BlogPost from 'src/components/shared/BlogPost'
import Wrapper from 'src/components/shared/Wrapper'
import Year from 'src/components/pages/blog/Year'

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <NextSeo
      canonical='https://carloscuesta.me/blog'
      title='Carlos Cuesta – Blog'
    />
    <main>
      <Wrapper>
        <PageTitle title='Blog' />
        <>
          {Object.keys(props.posts).sort(() => -1).map((year) => (
            <div className='row' key={year}>
              <Year year={year} />

              {props.posts[year].map((post) => (
                <BlogPost post={post} key={post.slug} />
              ))}
            </div>
          ))}
        </>
      </Wrapper>
    </main>
  </>
)

export const getStaticProps: GetStaticProps<{
  posts: { [key: string]: PostPreview[] }
}> = async () => {
  const posts: Array<PostPreview> = await fetchPosts()

  return {
    props: {
      posts: groupBy(
        posts,
        (post) => new Date(post.datePublished.value).getFullYear()
      )
    }
  }
}

export default Blog
