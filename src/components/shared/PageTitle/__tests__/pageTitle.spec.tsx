import renderer from 'react-test-renderer'

import PageTitle from '../index'

describe('PageTitle', () => {
  it('should match PageTitle component', () => {
    const wrapper = renderer.create(<PageTitle title="Some title" />)

    expect(wrapper).toMatchSnapshot()
  })
})
