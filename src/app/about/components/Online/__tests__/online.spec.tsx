import { render } from '@testing-library/react'

import Online from '../'

describe('Online', () => {
  it('should render the component', () => {
    const { container } = render(<Online />)

    expect(container).toMatchSnapshot()
  })
})
