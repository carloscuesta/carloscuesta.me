type Props = {
  title: string
}

const PageTitle = (props: Props) => (
  <h1 className='text-4xl font-bold my-6'>
    {props.title}
  </h1>
)

export default PageTitle
