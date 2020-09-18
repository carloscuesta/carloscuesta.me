// @flow
import React, { type Element } from 'react'

import { type Repository } from 'src/utils/api/github/mutators'
import styles from './styles.module.css'

type Props = {
  repository: Repository
}

const Project = (props: Props): Element<'div'> => (
  <div className={`col-xs-12 col-sm-6 col-md-4 ${styles.projectContainer}`}>
    <a
      className={`${styles.project} ${props.repository.language ? props.repository.language : ''}`}
      href={props.repository.url}
      rel='noopener noreferrer'
      target='_blank'
      title={props.repository.name}
    >
      <h5 className={styles.projectName}>{props.repository.name}</h5>
      <p>{props.repository.description}</p>
      <p>
        <span className={styles.starEmoji}>⭐️</span>
        {props.repository.stars}
      </p>
    </a>
  </div>
)

export default Project
