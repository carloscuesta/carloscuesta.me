import callApi from 'src/utils/api/callApi'
import { fetchPublishedPackages, fetchDownloadsCount } from '../index'
import {
  transformPublishedPackages,
  transformDownloadsCount,
} from '../mutators'

import publishedPackagesFixture from './fixtures/publishedPackages.json'
import packageDownloadsFixture from './fixtures/downloads.json'

jest.mock('src/utils/api/callApi')

const callApiMock = callApi as jest.Mock

describe('NPM API Client', () => {
  describe('apiCalls', () => {
    beforeEach(() => {
      callApiMock.mockReset()
    })

    it('should match fetchPublishedPackages call', () => {
      fetchPublishedPackages()

      expect(callApiMock.mock.calls[0][0]).toMatchSnapshot()
    })

    it('should match fetchDownloadsCount call', () => {
      fetchDownloadsCount(
        publishedPackagesFixture.objects.map((pkg) => pkg.package.name),
      )

      expect(callApiMock.mock.calls[0][0]).toMatchSnapshot()
    })
  })

  describe('mutators', () => {
    describe('transformPublishedPackages', () => {
      it('should match the packages names', () => {
        expect(
          transformPublishedPackages(publishedPackagesFixture),
        ).toMatchSnapshot()
      })
    })

    describe('transformDownloadsCount', () => {
      it('should aggregate all the downloads from packages', () => {
        expect(
          transformDownloadsCount(packageDownloadsFixture),
        ).toMatchSnapshot()
      })
    })
  })
})
