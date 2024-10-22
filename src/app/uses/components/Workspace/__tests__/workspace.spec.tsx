import { render } from '@testing-library/react'

import Workspace from '../index'

describe('Workspace', () => {
  it('should match Workspace component', () => {
    const { container } = render(<Workspace />)

    expect(container).toMatchSnapshot()
  })
})
