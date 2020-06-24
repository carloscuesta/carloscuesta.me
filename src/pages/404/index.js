// @flow
import React from 'react'
import Link from 'next/link'

import Wrapper from 'src/components/shared/Wrapper'
import styles from './styles.module.css'

const Error404 = () => (
  <Wrapper>
    <div className={`row middle-xs ${styles.error}`}>
      <div>
        <div className='col-xs-12'>
          <h1 className={styles.headline}>Are you lost ?</h1>
          <h2>The page you are looking for doesn't exists.</h2>
          <h3 className={styles.title}>Here are some helpful links instead:</h3>
          <ul className={styles.links}>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/blog'><a>Writings</a></Link></li>
            <li><a href='https://twitter.com/crloscuesta' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
          </ul>
          <h4>Error code: 404</h4>
        </div>
      </div>
    </div>
  </Wrapper>
)

export default Error404
