// @flow
import React from 'react'

import { type Repository } from 'src/utils/github/mutators'
import Wrapper from 'src/components/Wrapper'
import SectionTitle from '../SectionTitle'
import Project from './Project'

type Props = {
  repositories: Array<Repository>
}

const OpenSource = (props: Props) => (
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
