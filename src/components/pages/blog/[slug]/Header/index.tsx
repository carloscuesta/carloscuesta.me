type Props = {
  datePublished: { formatInWords: string; formatDate: string; value: string }
  readingTime: string
  title: string
}

const Header = (props: Props) => (
  <header className="mb-6 pb-4">
    <h1 className="mb-2 text-4xl font-extrabold">{props.title}</h1>

    <time
      className="text-sm uppercase opacity-70"
      dateTime={props.datePublished.value}
    >
      {props.datePublished.formatDate}
    </time>

    <span className='text-sm uppercase opacity-70 before:px-1 before:content-["•"]'>
      {props.readingTime}
    </span>
  </header>
)

export default Header
