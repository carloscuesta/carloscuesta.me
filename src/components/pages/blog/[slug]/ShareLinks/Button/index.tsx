type Props = {
  href: `https://${string}`,
  label: string
}

const Button = (props: Props) => (
  <a href={props.href} className="flex sm:space-x-2 flex-none items-center justify-center cursor-pointer leading-none transition-all font-semibold px-4 py-2 opacity-100 rounded-md text-neutral-700 hover:text-neutral-1000 shadow-xs bg-transparent border border-neutral-400 border-opacity-30 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200 dark:hover:text-white hover:border-opacity-50 hover:shadow-sm" target='_blank' rel='noopener noreferrer'>
    {props.label}
  </a>
)

export default Button
