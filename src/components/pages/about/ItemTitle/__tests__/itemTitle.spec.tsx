import renderer from 'react-test-renderer'

import ItemTitle from '../index'
import * as stubs from './stubs'

describe('ItemTitle', () => {
  describe('when children is a string', () => {
    it('should match ItemTitle component', () => {
      const wrapper = renderer.create(<ItemTitle {...stubs.propsString} />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when children is a Component', () => {
    it('should match ItemTitle component', () => {
      const wrapper = renderer.create(<ItemTitle {...stubs.propsComponent} />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
