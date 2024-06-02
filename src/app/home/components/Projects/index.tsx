import { type Repository } from 'src/utils/api/github/mutators'
import Wrapper from 'src/components/Wrapper'
import SectionTitle from 'src/components/SectionTitle'
import Project from './Project'

type Props = {
  repositories: Repository[]
}

const Projects = (props: Props) => (
  <section>
    <Wrapper>
      <SectionTitle title="Projects" />

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {props.repositories.map((repository) => (
          <Project repository={repository} key={repository.name} />
        ))}
      </div>
    </Wrapper>
  </section>
)

export default Projects
