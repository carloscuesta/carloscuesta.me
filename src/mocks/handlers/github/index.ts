import { http, HttpResponse } from 'msw'

import repositories from './mocks/repos.json'
import user from './mocks/user.json'

const baseUrl = 'https://api.github.com'

const githubHandlers = [
  http.get(`${baseUrl}/users/carloscuesta/repos`, () =>
    HttpResponse.json(repositories),
  ),
  http.get(`${baseUrl}/users/carloscuesta`, () => HttpResponse.json(user)),
]

export default githubHandlers
