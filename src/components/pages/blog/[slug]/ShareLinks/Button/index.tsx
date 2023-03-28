type Props = {
  href: `https://${string}`,
  label: string
}

const Button = (props: Props) => (
  <a href={props.href} className="flex sm:space-x-2 flex-none items-center justify-center cursor-pointer leading-none transition-all font-semibold px-4 py-2 opacity-100 rounded-md text-gray-700 hover:text-gray-1000 shadow-xs bg-transparent border border-gray-400 border-opacity-30 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:hover:text-white hover:border-opacity-50 hover:shadow-sm" target='_blank' rel='noopener noreferrer'>
    {props.label}
  </a>
)

export default Button
