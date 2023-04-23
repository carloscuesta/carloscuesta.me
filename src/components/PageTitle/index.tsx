type Props = {
  title: string
}

const PageTitle = (props: Props) => (
  <h1 className="my-6 text-xl font-bold">{props.title}</h1>
)

export default PageTitle
