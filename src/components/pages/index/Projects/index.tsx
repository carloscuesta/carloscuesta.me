import { type Repository } from 'src/utils/api/github/mutators'
import Wrapper from 'src/components/shared/Wrapper'
import SectionTitle from 'src/components/shared/SectionTitle'
import Project from './Project'

type Props = {
  repositories: Repository[]
}

const Projects = (props: Props) => (
  <section>
    <Wrapper>
      <SectionTitle
        title='Projects'
        subTitle='Selected open source projects.'
        viewAllLink='/opensource'
      />

      <div className='grid gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3'>
        {props.repositories.map((repository) => (
          <Project repository={repository} key={repository.name} />
        ))}
      </div>
    </Wrapper>
  </section>
)

export default Projects
