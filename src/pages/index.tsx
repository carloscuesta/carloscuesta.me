import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { NextSeo, SocialProfileJsonLd } from 'next-seo'

import { fetchPosts } from 'src/utils/api/blog'
import { fetchRepositories } from 'src/utils/api/github'
import { type PostPreview } from 'src/utils/api/blog/mutators'
import { type Repository } from 'src/utils/api/github/mutators'
import Biography from 'src/components/pages/index/Biography'
import Writings from 'src/components/pages/index/Writings'
import Projects from 'src/components/pages/index/Projects'

const Index = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <NextSeo canonical="https://carloscuesta.me" />
    <SocialProfileJsonLd
      type="Person"
      name="Carlos Cuesta"
      url="https://carloscuesta.me"
      sameAs={[
        'http://instagram.com/crloscuesta',
        'https://github.com/carloscuesta',
        'https://twitter.com/crloscuesta',
        'https://www.linkedin.com/in/crloscuesta',
      ]}
    />
    <main>
      <Biography />
      <Writings posts={props.posts} />
      <Projects repositories={props.repositories} />
    </main>
  </>
)

export const getStaticProps: GetStaticProps<{
  posts: PostPreview[]
  repositories: Repository[]
}> = async () => {
  const [posts, repositories] = await Promise.all([
    fetchPosts(),
    fetchRepositories(),
  ])

  return {
    props: {
      posts: posts.slice(0, 6),
      repositories: repositories
        .sort((x, y) => y.stars.value - x.stars.value)
        .slice(0, 6),
    },
    revalidate: 3600,
  }
}

export default Index
