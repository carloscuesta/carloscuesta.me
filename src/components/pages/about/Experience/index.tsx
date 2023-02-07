import workExperience, { type JobPosition } from 'src/utils/staticData/workExperience'
import SectionTitle from 'src/components/shared/SectionTitle'
import Job from './Job'

const Experience = () => (
  <section>
    <SectionTitle title='Experience' />
    <div className='row'>
      {workExperience.map((job: JobPosition, idx) => <Job {...job} key={idx} />)}
    </div>
    <hr />
  </section>
)

export default Experience
