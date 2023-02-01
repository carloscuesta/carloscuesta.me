import { type Repository } from 'src/utils/api/github/mutators'
import styles from './styles.module.css'

type Props = {
  repository: Repository
}

const Project = (props: Props) => (
  <div className={`col-xs-12 col-sm-6 col-md-4 ${styles.projectContainer}`}>
    <a
      className={`${styles.project} ${props.repository.language ? props.repository.language.toLowerCase() : ''}`}
      href={props.repository.url}
      rel='noopener noreferrer'
      target='_blank'
      title={props.repository.name}
    >
      <p className={styles.projectName}>{props.repository.name}</p>
      <p>{props.repository.description}</p>
      <p className={styles.starsContainer}>
        <svg className={styles.stars} viewBox='0 0 16 16' width='16' height='16' fill='currentColor'>
          <path d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z' />
        </svg>
        {props.repository.stars.toLocaleString()}
      </p>
    </a>
  </div>
)

export default Project
