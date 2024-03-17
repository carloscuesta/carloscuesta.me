import cn from 'src/utils/cn'

type Props = {
  label: string
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
  },
}

const Label = (props: Props) => (
  <div className="flex items-center justify-center rounded-full border border-neutral-400 border-opacity-30 bg-transparent px-4 py-2 text-sm font-semibold text-neutral-700 opacity-100 dark:border-neutral-700 dark:text-neutral-200">
    <div className="relative mr-2 flex h-2 w-2">
      <span
        className={cn(
          'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
          colors[props.color]['500'],
        )}
      ></span>
      <span
        className={cn(
          'relative inline-flex h-2 w-2 rounded-full',
          colors[props.color]['500'],
        )}
      ></span>
    </div>
    {props.label}
  </div>
)

export default Label
