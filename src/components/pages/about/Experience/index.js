// @flow
import React from 'react'

import workExperience, { type JobPosition } from 'src/utils/staticData/workExperience'
import Wrapper from 'src/components/shared/Wrapper'
import SectionTitle from 'src/components/shared/SectionTitle'
import Job from './Job'

const Experience = () => (
  <section>
    <Wrapper>
      <SectionTitle title='Experience' />
      <div className='row'>
        {workExperience.map((job: JobPosition, idx) => <Job {...job} key={idx} />)}
      </div>
      <hr />
    </Wrapper>
  </section>
)

export default Experience
