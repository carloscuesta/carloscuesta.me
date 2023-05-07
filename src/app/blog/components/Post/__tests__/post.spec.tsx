import renderer from 'react-test-renderer'

import Post from '../'
import * as stubs from './stubs'

describe('Post', () => {
  it('should render the component', () => {
    const wrapper = renderer.create(
      <Post post={stubs.post} views={'1,000 views'} />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
