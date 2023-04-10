type Props = {
  year: string
}

const Year = (props: Props) => (
  <h2 className="mb-4 text-lg font-bold opacity-90">{props.year}</h2>
)

export default Year
