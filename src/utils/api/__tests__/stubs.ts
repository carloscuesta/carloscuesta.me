export const responseCache = [
  { title: 'Post' }
]

export const request = (requestOptions?: RequestInit) => ({
  url: 'https://carloscuesta.me/api',
  mutator: jest.fn((value) => value),
  requestOptions
})

export const response = [{ name: 'Gitmoji' }]

export const headers = { headers: { param: 'value' } }
