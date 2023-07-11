import renderer from 'react-test-renderer'
import Wrapper from '../index'

describe('Wrapper', () => {
  it('should render the component with children', () => {
    const wrapper = renderer.create(
      <Wrapper>
        <h1>Some children</h1>
        <h2>Hello!</h2>
      </Wrapper>,
    )

    expect(wrapper).toMatchSnapshot()
  })

  describe('isCompressed', () => {
    it('should render the component with children', () => {
      const wrapper = renderer.create(
        <Wrapper isCompressed>
          <h1>Some children</h1>
          <h2>Hello!</h2>
        </Wrapper>,
      )

      expect(wrapper).toMatchSnapshot()
    })
  })
})
