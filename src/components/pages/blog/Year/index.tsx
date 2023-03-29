type Props = {
  year: string
}

const Year = (props: Props) => (
  <h2 className='text-lg font-bold mb-4 opacity-90'>{props.year}</h2>
)

export default Year
