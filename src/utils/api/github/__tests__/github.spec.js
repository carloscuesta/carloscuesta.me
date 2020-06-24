import callApi from 'src/utils/api/callApi'
import { fetchRepositories } from '../index'
import { transformRepositories } from '../mutators'

import reposFixture from './fixtures/repos'

jest.mock('src/utils/api/callApi')

describe('GitHub API Client', () => {
  describe('apiCalls', () => {
    beforeEach(() => {
      callApi.mockReset()
    })

    it('should match fetchRepositories call', () => {
      fetchRepositories()

      expect(callApi.mock.calls[0][0]).toMatchSnapshot()
    })
  })

  describe('mutators', () => {
    describe('transformRepositories', () => {
      it('should match the mutated repositories', () => {
        expect(transformRepositories(reposFixture)).toMatchSnapshot()
      })
    })
  })
})
