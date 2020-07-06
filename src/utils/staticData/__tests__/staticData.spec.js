import education from '../education'
import workExperience from '../workExperience'

describe('staticData', () => {
  describe('education', () => {
    it('should match data', () => {
      expect(education).toMatchSnapshot()
    })
  })

  describe('workExperience', () => {
    it('should match data', () => {
      expect(workExperience).toMatchSnapshot()
    })
  })
})
