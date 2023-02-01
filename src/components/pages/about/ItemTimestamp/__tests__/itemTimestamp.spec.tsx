import renderer from 'react-test-renderer'

import ItemTimestamp from '../index'
import * as stubs from './stubs'

describe('ItemTimestamp', () => {
  describe('when dateFinish is defined', () => {
    it('should match ItemTimestamp component', () => {
      const wrapper = renderer.create(<ItemTimestamp {...stubs.props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when dateFinish is not defined', () => {
    it('should match ItemTimestamp component rendering Now as dateFinish', () => {
      const wrapper = renderer.create(<ItemTimestamp {...stubs.propsNoFinish} />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
