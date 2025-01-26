type Props = {
  href: `https://${string}`
  label: string
}

const Button = (props: Props) => (
  <a
    href={props.href}
    className="shadow-2xs text-sm flex flex-none cursor-pointer items-center justify-center rounded-md border border-neutral-400 border-opacity-30 bg-transparent px-4 py-2 font-semibold leading-none text-neutral-700 opacity-100 transition-all hover:border-opacity-50 hover:shadow-xs dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:text-white sm:space-x-2"
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.label}
  </a>
)

export default Button
