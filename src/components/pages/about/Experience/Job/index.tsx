import { Fragment } from  'react'

import { type JobPosition } from 'src/utils/staticData/workExperience'
import ItemTimestamp from 'src/components/pages/about/ItemTimestamp'
import ItemTitle from 'src/components/pages/about/ItemTitle'
import CompanyLogo from './CompanyLogo'
import styles from './styles.module.css'

type Props = JobPosition

const Job = (props: Props) => {
  const hasJobMoreThanOnePosition = props.positions.length > 1

  if (hasJobMoreThanOnePosition) {
    const dateStart = props.positions[props.positions.length - 1].dateStart
    const dateFinish = props.positions[0].dateFinish

    return (
      <div className={`col-xs-12 ${styles.job}`}>
        <div className={styles.container}>
          <CompanyLogo url={props.company.logo} name={props.company.name} />

          <div className={styles.position}>
            <ItemTitle>
              <a target='_blank' rel='noopener noreferrer' href={props.company.link}>
                {props.company.name}
              </a>
            </ItemTitle>

            <ItemTimestamp dateFinish={dateFinish} dateStart={dateStart} />

            {props.positions.map((position) => (
              <div className={styles.positionList} key={position.title}>
                <span className={styles.positionMark} />
                <ItemTitle>{position.title}</ItemTitle>

                <ItemTimestamp
                  dateFinish={position.dateFinish}
                  dateStart={position.dateStart}
                />

                <p>{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`col-xs-12 ${styles.job}`}>
      <div className={styles.container}>
        {props.positions.map((position) => (
          <Fragment key={props.company.name}>
            <CompanyLogo url={props.company.logo} name={props.company.name} />

            <div className={styles.position}>
              <ItemTitle>
                {`${position.title} at `}
                <a target='_blank' rel='noopener noreferrer' href={props.company.link}>
                  {props.company.name}
                </a>
              </ItemTitle>
              <ItemTimestamp
                dateFinish={position.dateFinish}
                dateStart={position.dateStart}
              />

              <p>{position.description}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Job
