import Link from 'next/link'

type Props = {
  subTitle?: string,
  title: string,
  viewAllLink?: string
}

const SectionTitle = (props: Props) => (
  <div className='flex items-end justify-between my-6'>
    <div className={props.subTitle ? '' : 'space-y-2'}>
      <h2 className='font-bold text-lg'>
        {props.title}
      </h2>
      {props.subTitle &&
        <h3 className='text-md opacity-70'>
          {props.subTitle}
        </h3>}
    </div>

    {props.viewAllLink &&
      <Link className='text-sm opacity-70 hover:opacity-100 transition-opacity' href={props.viewAllLink}>
        View all
      </Link>}
  </div>
)

export default SectionTitle
