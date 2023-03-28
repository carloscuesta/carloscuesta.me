type Props = {
  datePublished: { formatInWords: string, formatDate: string, value: string },
  readingTime: string,
  title: string
}

const Header = (props: Props) => (
  <header className='pb-4 mb-6'>
    <h1 className='text-4xl font-extrabold mb-2'>{props.title}</h1>

    <time className='uppercase text-sm opacity-70' dateTime={props.datePublished.value}>
      {props.datePublished.formatDate}
    </time>

    <span className='uppercase text-sm opacity-70 before:content-["•"] before:px-1'>{props.readingTime}</span>
  </header>
)

export default Header
