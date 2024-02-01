import { http, HttpResponse } from 'msw'

import packages from './mocks/packages.json'
import downloads from './mocks/downloads.json'

const npmHandlers = [
  http.get('https://registry.npmjs.org/-/v1/search', () =>
    HttpResponse.json(packages),
  ),
  http.get('https://api.npmjs.org/downloads/point/last-year/*', () =>
    HttpResponse.json(downloads),
  ),
]

export default npmHandlers
