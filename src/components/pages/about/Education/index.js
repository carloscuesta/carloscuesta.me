// @flow
import React, { type Element } from 'react'

import Wrapper from 'src/components/shared/Wrapper'
import SectionTitle from 'src/components/shared/SectionTitle'
import ItemTitle from 'src/components/pages/about/ItemTitle'
import ItemTimestamp from 'src/components/pages/about/ItemTimestamp'
import education, { type Course } from 'src/utils/staticData/education'

import styles from './styles.module.css'

const Education = (): Element<'section'> => (
  <section>
    <Wrapper>
      <SectionTitle title='Education' />
      <div className='row'>
        {education.map((course: Course, idx) => (
          <div className={`col-xs-12 ${styles.course}`} key={idx}>
            <ItemTitle>{course.title} at <a href={course.link}>{course.location}</a></ItemTitle>
            <ItemTimestamp dateStart={course.dateStart} dateFinish={course.dateFinish} />
            <p>{course.description}</p>
          </div>
        ))}
      </div>
      <hr />
    </Wrapper>
  </section>
)

export default Education
