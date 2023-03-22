import { format } from 'date-fns'

type Props = {
  dateFinish: string | null,
  dateStart: string
}

const Timestamp = (props: Props) => {
  const dateStart = format(new Date(props.dateStart), 'y')
  const dateFinish = typeof props.dateFinish === 'string'
    ? format(new Date(props.dateFinish), 'y')
    : <em className='font-semibold'>Now</em>

  return (
    <span className='opacity-90'>{dateStart} – {dateFinish}</span>
  )
}

export default Timestamp
