import styles from './styles.module.css'

type Props = {
  canonicalUrl: string,
  slug: string,
  title: string
}

const ShareLinks = (props: Props) => (
  <>
    <hr />
    <b className={styles.title}>Did you enjoy the article ?</b>
    <div className={styles.links}>
      <a
        className={styles.socialButton}
        href={`https://twitter.com/intent/tweet?text=${props.title}&url=${props.canonicalUrl}&via=crloscuesta`}
        rel='noopener noreferrer'
        target='_blank'
      >
        Share on Twitter
      </a>
      <span className={styles.separator}>•</span>
      <a
        className={styles.socialButton}
        href={`http://twitter.com/search?q=${props.canonicalUrl}`}
        rel='noopener noreferrer'
        target='_blank'
      >
        Discuss on Twitter
      </a>
      <span className={styles.separator}>•</span>
      <a
        className={`${styles.socialButton} ${styles.editPost}`}
        href={`https://github.com/carloscuesta/carloscuesta.me/edit/master/src/posts/${props.slug}.md`}
        rel='noopener noreferrer'
        target='_blank'
      >
        Edit post on GitHub
      </a>
    </div>
    <hr />
  </>
)

export default ShareLinks
