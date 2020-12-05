// @flow
import React, { type Element } from 'react'
import Link from 'next/link'

import Wrapper from 'src/components/shared/Wrapper'
import styles from './styles.module.css'

const Footer = (): Element<'footer'> => (
  <footer>
    <Wrapper>
      <div className={styles.footer}>
        <strong><Link href='/'><a>carloscuesta.me</a></Link></strong>
        <ul>
          <li>
            <a
              href='https://github.com/carloscuesta'
              rel='noopener noreferrer'
              target='_blank'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/crloscuesta'
              rel='noopener noreferrer'
              target='_blank'
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://linkedin.com/in/crloscuesta'
              rel='noopener noreferrer'
              target='_blank'
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </Wrapper>
  </footer>
)

export default Footer
