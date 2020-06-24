// @flow
import React from 'react'
import Link from 'next/link'

import Wrapper from 'src/components/shared/Wrapper'
import styles from './styles.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <Wrapper>
      <div className={styles.footerContent}>
        <p><strong>Carlos Cuesta</strong></p>

        <ul className={styles.links}>
          <li><Link href='/blog'><a>Blog</a></Link></li>
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
