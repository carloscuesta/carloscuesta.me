import renderer from 'react-test-renderer'

import WhoAmI from '../index'

jest.mock('next/link', () => 'a')

describe('WhoAmI', () => {
  it('should match WhoAmI component', () => {
    const wrapper = renderer.create(<WhoAmI />)

    expect(wrapper).toMatchSnapshot()
  })
})
