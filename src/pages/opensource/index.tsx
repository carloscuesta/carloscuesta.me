import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'

import { fetchRepositories, fetchUserInformation } from 'src/utils/api/github'
import { fetchPublishedPackages, fetchDownloadsCount } from 'src/utils/api/npm'
import { type Repository, type UserInformation } from 'src/utils/api/github/mutators'
import PageTitle from 'src/components/shared/PageTitle'
import Wrapper from 'src/components/shared/Wrapper'
import Repositories from 'src/components/pages/opensource/Repositories'
import Stats from 'src/components/pages/opensource/Stats'

const Opensource = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <NextSeo
      canonical='https://carloscuesta.me/opensource'
      title='Carlos Cuesta – Open Source'
    />
    <main>
      <Wrapper>
        <PageTitle title='Open Source' />

        <Stats
          followers={props.userInformation.followers}
          packageDownloads={props.packageDownloads}
          stars={props.repositories
            .map((repository) => repository.stars)
            .reduce((memo, value) => memo + value)}
        />

        <Repositories repositories={props.repositories} />
      </Wrapper>
    </main>
  </>
)

export const getStaticProps: GetStaticProps<{
  packageDownloads: number,
  repositories: Repository[],
  userInformation: UserInformation,
}> = async () => {
  const [repositories, userInformation, publishedPackages] = await Promise.all([
    fetchRepositories(),
    fetchUserInformation(),
    fetchPublishedPackages()
  ])

  return {
    props: {
      packageDownloads: await fetchDownloadsCount(publishedPackages),
      repositories,
      userInformation
    },
    revalidate: 3600
  }
}

export default Opensource
