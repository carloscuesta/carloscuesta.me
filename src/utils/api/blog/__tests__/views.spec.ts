import { fetchViews, transformViews } from '../views'

jest.mock('@vercel/kv', () => ({
  hgetall: jest.fn().mockResolvedValue({
    'react-miami-2023': 1000,
    'hello-world': 500,
    'front-end-tooling-guide-to-improve-developer-experience': 423,
  }),
}))

describe('blog/views', () => {
  describe('transformViews', () => {
    it('should transform the views', () => {
      expect(transformViews(1000)).toEqual('1,000 views')
    })
  })

  describe('fetchViews', () => {
    it('should fetch and return the views', async () => {
      const views = await fetchViews()

      expect(views).toEqual({
        'react-miami-2023': '1,000 views',
        'hello-world': '500 views',
        'front-end-tooling-guide-to-improve-developer-experience': '423 views',
      })
    })
  })
})
