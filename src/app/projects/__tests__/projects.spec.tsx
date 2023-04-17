import renderer from 'react-test-renderer'

import Projects from '../page'
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

jest.mock('src/components/PageTitle', () => 'PageTitle')
jest.mock('../components/Repositories', () => 'Repositories')
jest.mock('../components/Stats', () => 'Stats')

describe('projects', () => {
  beforeAll(() => {
    ;(fetchRepositories as jest.Mock).mockReturnValue(stubs.repositories)
    ;(fetchUserInformation as jest.Mock).mockReturnValue(stubs.userInformation)
    ;(fetchPublishedPackages as jest.Mock).mockReturnValue(
      stubs.publishedPackages
    )
    ;(fetchDownloadsCount as jest.Mock).mockReturnValue(stubs.packageDownloads)
  })

  describe('page', () => {
    it('should match projects page', async () => {
      const projects = await Projects()
      const wrapper = renderer.create(projects)

      expect(wrapper).toMatchSnapshot()
      expect(fetchRepositories).toHaveBeenCalledWith()
      expect(fetchUserInformation).toHaveBeenCalledWith()
      expect(fetchPublishedPackages).toHaveBeenCalledWith()
      expect(fetchDownloadsCount).toHaveBeenCalledWith(stubs.publishedPackages)
    })
  })
})
