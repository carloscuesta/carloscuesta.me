import styles from './styles.module.css'

type Props = {
  datePublished: { formatInWords: string, formatDate: string, value: string },
  readingTime: string,
  title: string
}

const Header = (props: Props) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{props.title}</h1>

    <time className={styles.time} dateTime={props.datePublished.value}>
      {props.datePublished.formatDate}
    </time>

    <span className={styles.readingTime}>{props.readingTime}</span>
  </header>
)

export default Header
