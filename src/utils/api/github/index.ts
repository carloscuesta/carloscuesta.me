import callApi, { type callApiOptions } from 'src/utils/api/callApi'
import { transformRepositories, transformUserInformation } from './mutators'

const githubApiClient = <Response, Data>(
  options: callApiOptions<Response, Data>,
) =>
  callApi({
    mutator: options.mutator,
    url: `https://api.github.com${options.url}`,
    requestOptions: {
      headers: { Accept: 'application/vnd.github.v3+json' },
    },
  })

export const fetchRepositories = () =>
  githubApiClient({
    mutator: transformRepositories,
    url: '/users/carloscuesta/repos',
  })

export const fetchUserInformation = () =>
  githubApiClient({
    mutator: transformUserInformation,
    url: '/users/carloscuesta',
  })
