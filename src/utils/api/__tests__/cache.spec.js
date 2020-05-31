import cache from '../cache'

describe('api cache', () => {
  it('should match apiCache', () => {
    expect(cache).toMatchSnapshot()
  })
})
