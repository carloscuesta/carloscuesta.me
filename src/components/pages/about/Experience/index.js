// @flow
import type { Element } from 'react'

import workExperience, { type JobPosition } from 'src/utils/staticData/workExperience'
import SectionTitle from 'src/components/shared/SectionTitle'
import Job from './Job'

const Experience = (): Element<'section'> => (
  <section>
    <SectionTitle title='Experience' />
    <div className='row'>
      {workExperience.map((job: JobPosition, idx) => <Job {...job} key={idx} />)}
    </div>
    <hr />
  </section>
)

export default Experience
