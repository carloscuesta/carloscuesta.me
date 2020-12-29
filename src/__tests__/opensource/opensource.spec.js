import renderer from 'react-test-renderer'

import OpenSource, { getStaticProps } from 'src/pages/opensource'
import { fetchRepositories, fetchUserInformation } from 'src/utils/api/github'
import { fetchPublishedPackages, fetchDownloadsCount } from 'src/utils/api/npm'
import * as stubs from './stubs'

jest.mock('next-seo', () => ({ NextSeo: 'NextSeo' }))
jest.mock('src/utils/api/blog')
jest.mock('src/utils/api/github')
jest.mock('src/utils/api/npm')

/*
  I'm mocking the components since those are unit tested.
  So there's no point to test the rendering of them twice.
  It's more easier to manage little snapshots than big ones.
*/

jest.mock('src/components/shared/PageTitle', () => 'PageTitle')
jest.mock('src/components/pages/opensource/Repositories', () => 'Repositories')
jest.mock('src/components/pages/opensource/Stats', () => 'Stats')

describe('index', () => {
  describe('page', () => {
    it('should match opensource page', () => {
      const wrapper = renderer.create(<OpenSource {...stubs.props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('getStaticProps', () => {
    beforeAll(() => {
      fetchRepositories.mockReturnValue(stubs.repositories)
      fetchUserInformation.mockReturnValue(stubs.userInformation)
      fetchPublishedPackages.mockReturnValue(stubs.publishedPackages)
      fetchDownloadsCount.mockReturnValue(stubs.packageDownloads)
    })

    it('should return repositories and userInformation as props and set revalidate', async () => {
      const props = await getStaticProps()

      expect(fetchRepositories).toHaveBeenCalledWith()
      expect(fetchUserInformation).toHaveBeenCalledWith()
      expect(fetchPublishedPackages).toHaveBeenCalledWith()
      expect(fetchDownloadsCount).toHaveBeenCalledWith(stubs.publishedPackages)

      expect(props).toEqual({
        props: {
          repositories: stubs.repositories,
          userInformation: stubs.userInformation,
          packageDownloads: stubs.packageDownloads
        },
        revalidate: 3600
      })
    })
  })
})
