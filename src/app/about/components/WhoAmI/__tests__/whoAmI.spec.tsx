import { render } from '@testing-library/react'

import WhoAmI from '../index'

describe('WhoAmI', () => {
  it('should match WhoAmI component', () => {
    const { container } = render(<WhoAmI />)

    expect(container).toMatchSnapshot()
  })
})
