import cn from './../index'

describe('cn', () => {
  it('should return a string with the given classes', () => {
    expect(cn('foo', 'bar', true && 'a', false && 'b')).toBe('foo bar a')
  })
})
