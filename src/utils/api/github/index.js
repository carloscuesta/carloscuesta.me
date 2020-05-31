// @flow
import callApi, { type callApiOptions } from 'src/utils/api/callApi'
import { type Repository, transformRepositories } from './mutators'

const githubApiClient = (options: callApiOptions): Promise<Object> => callApi({
  cacheKey: options.cacheKey,
  mutator: options.mutator,
  url: `https://api.github.com${options.url}`,
  requestOptions: {
    headers: {
      Authorization: process.env.GITHUB_TOKEN,
      Accept: 'application/vnd.github.v3+json'
    }
  }
})

export const fetchRepositories = (): Promise<Array<Repository>> => githubApiClient({
  cacheKey: 'repositories',
  mutator: transformRepositories,
  url: '/search/repositories?q=user:carloscuesta&sort=stars&per_page=6&order=desc'
})
