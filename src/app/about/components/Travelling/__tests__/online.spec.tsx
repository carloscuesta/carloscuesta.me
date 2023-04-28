import renderer from 'react-test-renderer'

import Travelling from '../'

describe('Travelling', () => {
  it('should render the component', () => {
    const wrapper = renderer.create(<Travelling />)

    expect(wrapper).toMatchSnapshot()
  })
})
