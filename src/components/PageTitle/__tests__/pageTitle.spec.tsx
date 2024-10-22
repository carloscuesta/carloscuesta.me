import { render } from '@testing-library/react'

import PageTitle from '../index'

describe('PageTitle', () => {
  it('should match PageTitle component', () => {
    const { container } = render(<PageTitle title="Some title" />)

    expect(container).toMatchSnapshot()
  })
})
