import { type Metadata } from 'next'

import { fetchRepositories, fetchUserInformation } from 'src/utils/api/github'
import { fetchPublishedPackages, fetchDownloadsCount } from 'src/utils/api/npm'
import PageTitle from 'src/components/PageTitle'
import Wrapper from 'src/components/Wrapper'
import Repositories from './components/Repositories'
import Stats from './components/Stats'

export const metadata: Metadata = {
  title: 'Uses',
  alternates: {
    canonical: '/uses',
  },
}

const Projects = async () => {
  const data = await getData()

  return (
    <main>
      <Wrapper>
        <PageTitle title="Projects" />

        <Stats
          followers={data.userInformation.followers}
          packageDownloads={data.packageDownloads}
          stars={data.stars}
        />

        <Repositories repositories={data.repositories} />
      </Wrapper>
    </main>
  )
}

export const revalidate = 3600

const getData = async () => {
  const [repositories, userInformation, publishedPackages] = await Promise.all([
    fetchRepositories(),
    fetchUserInformation(),
    fetchPublishedPackages(),
  ])

  return {
    packageDownloads: await fetchDownloadsCount(publishedPackages),
    repositories,
    stars: repositories
      .map((repository) => repository.stars.value)
      .reduce((memo, value) => memo + value)
      .toLocaleString(),
    userInformation,
  }
}

export default Projects
