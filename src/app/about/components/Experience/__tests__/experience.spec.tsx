import { render } from '@testing-library/react'

import Experience from '../index'

describe('Experience', () => {
  it('should match Experience component', () => {
    const { container } = render(<Experience />)

    expect(container).toMatchSnapshot()
  })
})
