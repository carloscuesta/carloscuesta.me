import { type Repository } from 'src/utils/api/github/mutators'
import Wrapper from 'src/components/shared/Wrapper'
import SectionTitle from 'src/components/shared/SectionTitle'
import Project from './Project'

type Props = {
  repositories: Repository[]
}

const OpenSource = (props: Props) => (
  <section>
    <Wrapper>
      <SectionTitle
        title='Open Source'
        subTitle='Featured open source projects.'
        viewAllLink='/opensource'
      />

      <div className='row'>
        {props.repositories.map((repository) => (
          <Project repository={repository} key={repository.name} />
        ))}
      </div>
    </Wrapper>
  </section>
)

export default OpenSource
