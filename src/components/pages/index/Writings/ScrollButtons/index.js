// @flow
import React from 'react'

import styles from './styles.module.css'

type Props = { scrollTo: Function }

const ScrollButtons = (props: Props) => (
  <div className='row'>
    <div className={`col-xs-12 ${styles.scrollButtons}`}>
      <button
        className={styles.button}
        onClick={() => props.scrollTo('previous')}
      >
        <svg
          fill='currentColor'
          height='24'
          width='24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M15.422 7.406L10.828 12l4.594 4.594L14.016 18l-6-6 6-6z' />
        </svg>
        <span>Back</span>
      </button>

      <button
        className={styles.button}
        onClick={() => props.scrollTo('next')}
      >
        <span>Next</span>
        <svg
          fill='currentColor'
          height='24'
          width='24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M9.984 6l6 6-6 6-1.406-1.406L13.172 12 8.578 7.406z' />
        </svg>
      </button>
    </div>
  </div>
)

export default ScrollButtons
