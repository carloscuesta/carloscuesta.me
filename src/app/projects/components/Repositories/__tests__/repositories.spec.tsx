import renderer from 'react-test-renderer'

import Repositories from '../index'
import * as stubs from './stubs'

describe('Repositories', () => {
  it('should match Repositories component', () => {
    const wrapper = renderer.create(<Repositories {...stubs.props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
