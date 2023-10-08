import { renderHook } from '@testing-library/react'

import * as stubs from './stubs'
import useViewsCount from '..'

describe('useViewsCount', () => {
  it('should return data and mutate', () => {
    const { result } = renderHook(() =>
      useViewsCount(stubs.post.slug, stubs.post.views),
    )

    expect(result.current.data).toEqual({
      views: { [stubs.post.slug]: stubs.post.views },
    })
    expect(result.current.mutate).toBeInstanceOf(Function)
  })
})
