import Link from 'next/link'

import styles from './styles.module.css'

type Props = {
  subTitle?: string,
  title: string,
  viewAllLink?: string
}

const SectionTitle = (props: Props) => (
  <div
    className={[
      styles.container,
      props.viewAllLink ? styles.containerWithLink : undefined
    ].join(' ')}
  >
    <div>
      <h2
        className={[
          styles.sectionTitle,
          !props.subTitle ? styles.sectionTitleMargin : undefined
        ].join(' ')}
      >
        {props.title}
      </h2>
      {props.subTitle &&
        <h3 className={styles.sectionSubtitle}>
          {props.subTitle}
        </h3>}
    </div>

    {props.viewAllLink &&
      <Link href={props.viewAllLink}>
        View all
      </Link>}
  </div>
)

export default SectionTitle
