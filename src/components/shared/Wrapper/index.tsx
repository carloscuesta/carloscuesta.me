import styles from './styles.module.css'

type Props = { children: JSX.Element[] | JSX.Element, isCompressed?: boolean }

const Wrapper = (props: Props) => (
  <div className={props.isCompressed ? styles.wrapperCompressed : styles.wrapper}>
    {props.children}
  </div>
)

export default Wrapper
