import { render } from '@testing-library/react'
import Wrapper from '../index'

describe('Wrapper', () => {
  it('should render the component with children', () => {
    const { container } = render(
      <Wrapper>
        <h1>Some children</h1>
        <h2>Hello!</h2>
      </Wrapper>,
    )

    expect(container).toMatchSnapshot()
  })

  describe('isCompressed', () => {
    it('should render the component with children', () => {
      const { container } = render(
        <Wrapper isCompressed>
          <h1>Some children</h1>
          <h2>Hello!</h2>
        </Wrapper>,
      )

      expect(container).toMatchSnapshot()
    })
  })
})
