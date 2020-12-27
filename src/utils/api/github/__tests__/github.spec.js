import callApi from 'src/utils/api/callApi'
import { fetchRepositories, fetchUserInformation } from '../index'
import { transformRepositories, transformUserInformation } from '../mutators'

import reposFixture from './fixtures/repos'
import userInformationFixture from './fixtures/user'

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

    it('should match fetchUserInformation call', () => {
      fetchUserInformation()

      expect(callApi.mock.calls[0][0]).toMatchSnapshot()
    })
  })

  describe('mutators', () => {
    describe('transformRepositories', () => {
      it('should match the mutated repositories', () => {
        expect(transformRepositories(reposFixture)).toMatchSnapshot()
      })
    })

    describe('transformUserInformation', () => {
      it('should match the mutated user information', () => {
        expect(transformUserInformation(userInformationFixture)).toMatchSnapshot()
      })
    })
  })
})
