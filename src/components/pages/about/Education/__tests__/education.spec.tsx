import renderer from 'react-test-renderer'

import Education from '../index'

describe('Education', () => {
  it('should match Education component', () => {
    const wrapper = renderer.create(<Education />)

    expect(wrapper).toMatchSnapshot()
  })
})
