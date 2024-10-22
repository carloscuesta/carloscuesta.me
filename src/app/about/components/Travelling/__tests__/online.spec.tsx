import { render } from '@testing-library/react'

import Travelling from '../'

describe('Travelling', () => {
  it('should render the component', () => {
    const { container } = render(<Travelling />)

    expect(container).toMatchSnapshot()
  })
})
