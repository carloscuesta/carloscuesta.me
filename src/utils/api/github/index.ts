import callApi, { type callApiOptions } from 'src/utils/api/callApi'
import {
  transformRepositories,
  transformUserInformation,
  type Repository,
  type UserInformation
} from './mutators'

const githubApiClient = <TData>(options: callApiOptions): Promise<TData> => callApi({
  mutator: options.mutator,
  url: `https://api.github.com${options.url}`,
  requestOptions: {
    headers: { Accept: 'application/vnd.github.v3+json' }
  }
})

export const fetchRepositories = () => githubApiClient<Repository[]>({
  mutator: transformRepositories,
  url: '/users/carloscuesta/repos'
})

export const fetchUserInformation = () => githubApiClient<UserInformation>({
  mutator: transformUserInformation,
  url: '/users/carloscuesta'
})
