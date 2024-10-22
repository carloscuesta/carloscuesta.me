import { render } from '@testing-library/react'

import Biography from '../index'

describe('Biography', () => {
  it('should match Biography component', () => {
    const { container } = render(<Biography />)

    expect(container).toMatchSnapshot()
  })
})
