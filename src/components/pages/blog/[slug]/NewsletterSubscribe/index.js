// @flow
import type { Element } from 'react'

import styles from './styles.module.css'

const NewsletterSubscribe = (): Element<'form'> => (
  <form
    className={styles.container}
    action='https://buttondown.email/api/emails/embed-subscribe/carloscuesta'
    method='post'
    target='popupwindow'
  >
    <b className={styles.title}>Subscribe to the newsletter 👨‍💻</b>

    <div className='row'>
      <div className='col-xs-12 col-sm-6'>
        <p className={styles.explanation}>
          Be the first to know when I write something new! If you don't like emails, you can
          follow me on {' '}
          <a href='https://twitter.com/intent/follow?screen_name=crloscuesta' rel='noopener noreferrer' target='_blank'>
            twitter
          </a>.
        </p>
      </div>

      <div className='col-xs-12 col-sm-6'>
        <p>
          <label htmlFor='bd-email'>Write your email:</label>
        </p>

        <div className={styles.form}>
          <input
            id='bd-email'
            className={styles.input}
            name='email'
            placeholder='Your email address'
            required
            type='email'
          />

          <input type='hidden' value='1' name='embed' />

          <input className={styles.submit} type='submit' value='Subscribe' />
        </div>
      </div>
    </div>
  </form>
)

export default NewsletterSubscribe
