import SectionTitle from 'src/components/shared/SectionTitle'
import Stat from './Stat'

type Props = {
  followers: number,
  packageDownloads: number,
  stars: number
}

const Stats = (props: Props) => (
  <section>
    <SectionTitle title='Stats' />

    <div className='row'>
      <Stat label='GitHub Stars' value={props.stars} />
      <Stat label='GitHub Followers' value={props.followers} />
      <Stat label='NPM Downloads (Last year)' value={props.packageDownloads} />
    </div>
  </section>
)

export default Stats
