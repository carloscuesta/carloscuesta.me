import Stat from './Stat'

type Props = {
  followers: string
  packageDownloads: string
  stars: string
}

const Stats = (props: Props) => (
  <section className="grid gap-4 sm:grid-flow-col sm:grid-cols-3">
    <Stat label="GitHub Stars" value={props.stars} />
    <Stat label="GitHub Followers" value={props.followers} />
    <Stat label="NPM Downloads" value={props.packageDownloads} unit="/ year" />
  </section>
)

export default Stats
