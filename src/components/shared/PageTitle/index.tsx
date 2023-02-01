import styles from './styles.module.css'

type Props = {
  title: string
}

const PageTitle = (props: Props) => (
  <h1 className={styles.title}>
    {props.title}
  </h1>
)

export default PageTitle
