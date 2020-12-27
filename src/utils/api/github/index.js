// @flow
import callApi, { type callApiOptions } from 'src/utils/api/callApi'
import {
  transformRepositories,
  transformUserInformation,
  type Repository,
  type UserInformation
} from './mutators'

const githubApiClient = (options: callApiOptions): Promise<Object> => callApi({
  mutator: options.mutator,
  url: `https://api.github.com${options.url}`,
  requestOptions: {
    headers: { Accept: 'application/vnd.github.v3+json' }
  }
})

export const fetchRepositories = (): Promise<Array<Repository>> => githubApiClient({
  mutator: transformRepositories,
  url: '/users/carloscuesta/repos'
})

export const fetchUserInformation = (): Promise<UserInformation> => githubApiClient({
  mutator: transformUserInformation,
  url: '/users/carloscuesta'
})
