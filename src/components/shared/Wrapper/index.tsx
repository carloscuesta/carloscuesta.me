type Props = {
  children: JSX.Element[] | JSX.Element
  isCompressed?: boolean
}

const Wrapper = (props: Props) => (
  <div
    className={`m-[0_auto] max-w-4xl px-6 sm:px-4 ${
      props.isCompressed ? 'max-w-[800px]' : ''
    }`}
  >
    {props.children}
  </div>
)

export default Wrapper
