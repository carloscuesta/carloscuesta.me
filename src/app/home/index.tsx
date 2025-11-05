import { ProfilePageJsonLd } from 'next-seo'

import { type PostPreview } from 'src/utils/api/blog/mutators'
import { type Repository } from 'src/utils/api/github/mutators'
import Biography from './components/Biography'
import Writings from './components/Writings'
import Projects from './components/Projects'

type Props = {
  repositories: Repository[]
  posts: PostPreview[]
}

const Home = (props: Props) => {
  return (
    <main>
      <ProfilePageJsonLd
        mainEntity={{
          name: 'Carlos Cuesta',
          image: 'https://carloscuesta.me/images/carloscuesta.jpg',
          sameAs: [
            'https://carloscuesta.me',
            'https://github.com/carloscuesta',
            'https://twitter.com/crloscuesta',
            'https://www.linkedin.com/in/crloscuesta',
          ],
        }}
      />

      <Biography />
      <Writings posts={props.posts} />
      <Projects repositories={props.repositories} />
    </main>
  )
}

export default Home
