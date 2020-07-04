// @flow
import React from 'react'

import workExperience, { type JobPosition } from 'src/utils/staticData/workExperience'
import Wrapper from 'src/components/shared/Wrapper'
import Job from './Job'

const Experience = () => (
  <section>
    <Wrapper>
      <div className='row'>
        {workExperience.map((job: JobPosition, idx) => <Job {...job} key={idx} />)}
      </div>
    </Wrapper>
  </section>
)

export default Experience
