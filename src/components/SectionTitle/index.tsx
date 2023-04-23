import Link from 'next/link'

type Props = {
  subTitle?: string
  title: string
  viewAllLink?: string
}

const SectionTitle = (props: Props) => (
  <div className="my-6 flex items-end justify-between">
    <div className={props.subTitle ? '' : 'space-y-2'}>
      <h2 className="text-lg font-bold">{props.title}</h2>
      {props.subTitle && (
        <h3 className="text-md opacity-70">{props.subTitle}</h3>
      )}
    </div>

    {props.viewAllLink && (
      <Link
        className="text-sm opacity-70 transition-opacity hover:opacity-100"
        href={props.viewAllLink}
      >
        View all
      </Link>
    )}
  </div>
)

export default SectionTitle
