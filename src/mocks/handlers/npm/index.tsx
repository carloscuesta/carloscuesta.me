import { rest } from 'msw'

import packages from './mocks/packages.json'
import downloads from './mocks/downloads.json'

const npmHandlers = [
  rest.get(
    'https://registry.npmjs.org/-/v1/search',
    (_req, res, ctx) => res(ctx.json(packages))
  ),
  rest.get(
    'https://api.npmjs.org/downloads/point/last-year/*',
    (_req, res, ctx) => res(ctx.json(downloads))
  )
]

export default npmHandlers
