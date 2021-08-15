// @flow
import type { Element } from 'react'

import styles from './styles.module.css'

type Props = { url: string, name: string }

const CompanyLogo = (props: Props): Element<'div'> => (
  <div className={styles.container}>
    <img
      alt={props.name}
      className={`lazyload ${styles.logo}`}
      data-src={props.url}
      src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
      width={48}
      height={48}
    />
  </div>
)

export default CompanyLogo
