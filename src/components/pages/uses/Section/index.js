// @flow
import React, { type Element } from 'react'

import SectionTitle from 'src/components/shared/SectionTitle'
import styles from './styles.module.css'

type Props = {
  items: Array<{ category: string, link?: ?string, title: string }>,
  subTitle: string,
  title: string,
}

const Section = (props: Props): Element<'section'> => (
  <section>
    <SectionTitle title={props.title} subTitle={props.subTitle} />

    <ul className={styles.list}>
      {props.items.map((item) => (
        <li key={item.title}>
          <p className={styles.title}>
            {`${item.category} – `}
            {item.link
              ? (
                <a href={item.link} rel='noopener noreferrer'>
                  {item.title}
                </a>
                )
              : item.title}
          </p>
        </li>
      ))}
    </ul>
  </section>
)

export default Section
