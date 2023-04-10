import { rest } from 'msw'

import repositories from './mocks/repos.json'
import user from './mocks/user.json'

const baseUrl = 'https://api.github.com'

const githubHandlers = [
  rest.get(`${baseUrl}/users/carloscuesta/repos`, (_req, res, ctx) =>
    res(ctx.json(repositories))
  ),
  rest.get(`${baseUrl}/users/carloscuesta`, (_req, res, ctx) =>
    res(ctx.json(user))
  ),
]

export default githubHandlers
