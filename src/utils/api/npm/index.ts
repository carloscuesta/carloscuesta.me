import callApi from 'src/utils/api/callApi'
import { transformPublishedPackages, transformDownloadsCount } from './mutators'

export const fetchPublishedPackages = (): Promise<string[]> => callApi({
  mutator: transformPublishedPackages,
  url: 'https://registry.npmjs.org/-/v1/search?text=author:carloscuesta'
})

export const fetchDownloadsCount = (packages: Array<string>): Promise<number> => callApi({
  mutator: transformDownloadsCount,
  url: `https://api.npmjs.org/downloads/point/last-year/${packages.join()}`
})
