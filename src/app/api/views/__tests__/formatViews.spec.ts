import formatViews from '../formatViews'

describe('formatViews', () => {
  it('formats views', () => {
    expect(formatViews(1000)).toEqual('1,000 views')
  })
})
