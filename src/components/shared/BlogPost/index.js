// @flow
import React, { type Element } from 'react'
import Link from 'next/link'

import { type PostPreview } from 'src/utils/api/blog/mutators'
import styles from './styles.module.css'

type Props = {
  post: PostPreview
}

const BlogPost = (props: Props): Element<'div'> => (
  <div className={`col-xs-12 col-sm-6 col-md-4 ${styles.postContainer}`}>
    <Link href={`/blog/${props.post.slug}`}>
      <a className={styles.post} title={props.post.title}>
        <article>
          <img
            alt={props.post.title}
            className={`lazyload ${styles.postImage}`}
            data-src={props.post.images.preview.src}
            src={props.post.images.preview.lqpi}
          />

          <div className={styles.postContent}>
            <header>
              <h5 className={styles.postTitle}>{props.post.title}</h5>
            </header>

            <time className={styles.postPublishedAt} dateTime={props.post.datePublished.value}>
              {props.post.datePublished.formatInWords}
            </time>

            <p className={styles.postExcerpt}>
              {props.post.excerpt}
            </p>
          </div>
        </article>
      </a>
    </Link>
  </div>
)

export default BlogPost
