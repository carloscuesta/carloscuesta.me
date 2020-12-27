// @flow
import React, { type Node } from 'react'
import { NextSeo } from 'next-seo'

import { fetchRepositories, fetchUserInformation } from 'src/utils/api/github'
import { type Repository, type UserInformation } from 'src/utils/api/github/mutators'
import PageTitle from 'src/components/shared/PageTitle'
import Wrapper from 'src/components/shared/Wrapper'
import Repositories from 'src/components/pages/opensource/Repositories'
import Stats from 'src/components/pages/opensource/Stats'

type Props = {
  repositories: Array<Repository>,
  userInformation: UserInformation
}

const Index = (props: Props): Node => (
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
          repositories={props.userInformation.repositories}
          stars={props.repositories
            .map((repository) => repository.stars)
            .reduce((memo, value) => memo + value)}
        />

        <Repositories repositories={props.repositories} />
      </Wrapper>
    </main>
  </>
)

export const getStaticProps = async (): Promise<{ props: Props }> => {
  const [repositories, userInformation] = await Promise.all([
    fetchRepositories(),
    fetchUserInformation()
  ])

  return {
    props: {
      repositories,
      userInformation
    },
    revalidate: 3600
  }
}

export default Index
