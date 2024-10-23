import { render } from '@testing-library/react'

import Photos from '../index'

describe('Photos', () => {
  it('should match Photos component', () => {
    const { container } = render(<Photos />)

    expect(container).toMatchSnapshot()
  })
})
