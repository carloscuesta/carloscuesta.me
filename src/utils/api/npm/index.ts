import callApi from 'src/utils/api/callApi'
import { transformPublishedPackages, transformDownloadsCount } from './mutators'

export const fetchPublishedPackages = () =>
  callApi({
    mutator: transformPublishedPackages,
    url: 'https://registry.npmjs.org/-/v1/search?text=author:carloscuesta',
  })

export const fetchDownloadsCount = (packages: Array<string>) =>
  callApi({
    mutator: transformDownloadsCount,
    url: `https://api.npmjs.org/downloads/point/last-year/${packages.join()}`,
  })
