import { http, HttpResponse } from 'msw'

import views from './mocks/views.json'

const baseUrl = 'https://carloscuesta.me/api'

const githubHandlers = [
  http.get(`${baseUrl}/views`, () => HttpResponse.json(views)),
]

export default githubHandlers
