import { render } from '@testing-library/react'

import Year from '../index'

describe('Year', () => {
  it('should match Year component', () => {
    const { container } = render(<Year year={'2020'} />)

    expect(container).toMatchSnapshot()
  })
})
