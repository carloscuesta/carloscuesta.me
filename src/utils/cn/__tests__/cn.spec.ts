import cn from './../index'

describe('cn', () => {
  it('should return a string with the given classes', () => {
    const condition1 = true
    const condition2 = false
    expect(cn('foo', 'bar', condition1 && 'a', condition2 && 'b')).toBe(
      'foo bar a',
    )
  })
})
