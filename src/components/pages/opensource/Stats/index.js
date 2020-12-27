// @flow
import React, { type Element } from 'react'

import SectionTitle from 'src/components/shared/SectionTitle'
import Stat from './Stat'

type Props = {
  followers: number,
  repositories: number,
  stars: number
}

const Stats = (props: Props): Element<'section'> => (
  <section>
    <SectionTitle title='Stats' />

    <div className='row'>
      <Stat label='GitHub Stars' value={props.stars} />
      <Stat label='GitHub Followers' value={props.followers} />
      <Stat label='Public Repositories' value={props.repositories} />
    </div>
  </section>
)

export default Stats
