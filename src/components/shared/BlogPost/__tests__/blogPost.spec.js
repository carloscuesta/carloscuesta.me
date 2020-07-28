import renderer from 'react-test-renderer'

import BlogPost from '../index'
import * as stubs from './stubs'

jest.mock('next/link', () => 'a')

describe('BlogPost', () => {
  it('should match BlogPost component', () => {
    const wrapper = renderer.create(<BlogPost {...stubs.props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
