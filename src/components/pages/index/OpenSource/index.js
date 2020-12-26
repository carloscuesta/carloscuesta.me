// @flow
import React, { type Element } from 'react'

import { type Repository } from 'src/utils/api/github/mutators'
import Wrapper from 'src/components/shared/Wrapper'
import SectionTitle from 'src/components/shared/SectionTitle'
import Project from './Project'

type Props = {
  repositories: Array<Repository>
}

const OpenSource = (props: Props): Element<'section'> => (
  <section>
    <Wrapper>
      <SectionTitle
        title='Open Source'
        subTitle='Featured open source projects.'
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
