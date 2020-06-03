// @flow
import React from 'react'
import Link from 'next/link'

import { type Post } from 'src/utils/api/ghost/mutators'
import styles from './styles.module.css'

type Props = {
  post: Post
}

const BlogPost = (props: Props) => (
  <div className={`col-xs-12 col-sm-6 col-md-4 ${styles.postContainer}`}>
    <Link href={props.post.slug}>
      <a className={styles.post} title={props.post.title}>
        <article>
          <img
            alt={props.post.title}
            className={`lazyload ${styles.postImage}`}
            data-src={props.post.image}
          />

          <div className={styles.postContent}>
            <header>
              <h5>{props.post.title}</h5>
            </header>

            <time className={styles.postPublishedAt} dateTime={props.post.publishedAt.value}>
              {props.post.publishedAt.format}
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
