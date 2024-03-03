import Link from 'next/link'

type Props = {
  title: string
  href?: string
  viewAll?: boolean
}

const SectionTitle = (props: Props) => {
  if (props.href) {
    return (
      <Link
        className={`${props.viewAll ? 'flex' : 'inline-flex'} items-center gap-3 my-6 justify-between group cursor-pointer`}
        href={props.href}
      >
        <h2 className="text-lg font-bold underline-offset-4 group-hover:underline">
          {props.title}
        </h2>

        {props.viewAll && (
          <span className="px-2 py-[3px] border text-center rounded-lg cursor-pointer text-xs bg-white dark:bg-neutral-900 dark:border-neutral-700">
            View all →
          </span>
        )}
      </Link>
    )
  }

  return <h2 className="my-6 block text-lg font-bold">{props.title}</h2>
}

export default SectionTitle
