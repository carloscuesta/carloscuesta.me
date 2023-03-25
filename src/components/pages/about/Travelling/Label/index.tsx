type Props = {
  label: string,
  color: keyof typeof colors
}

const colors = {
  neutral: {
    500: 'bg-neutral-500',
    400: 'bg-neutral-400',
  },
  sky: {
    500: 'bg-sky-500',
    400: 'bg-sky-400',
  }
}

const Label = (props: Props) => (
  <div className='flex justify-center font-semibold px-4 py-2 text-sm opacity-100 rounded-full text-gray-700 bg-transparent border border-gray-400 border-opacity-30 dark:border-gray-700 dark:text-gray-200 items-center'>
    <div className="flex relative w-2 h-2 mr-2">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${colors[props.color]['500']}`}></span>
      <span className={`relative inline-flex rounded-full h-2 w-2 ${colors[props.color]['500']}`}></span>
    </div>
    {props.label}
  </div>
)

export default Label

  