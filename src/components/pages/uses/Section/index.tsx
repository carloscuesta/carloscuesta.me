import SectionTitle from 'src/components/shared/SectionTitle'

type Props = {
  items: { category: string, link?: string, title: string }[],
  subTitle: string,
  title: string,
}

const Section = (props: Props) => (
  <section>
    <SectionTitle title={props.title} subTitle={props.subTitle} />

    <ul className='prose dark:prose-invert list-disc list-inside'>
      {props.items.map((item) => (
        <li key={item.title}>
          {`${item.category} – `}
          {item.link
            ? (
              <a href={item.link} rel='noopener noreferrer'>
                {item.title}
              </a>
              )
            : item.title}
        </li>
      ))}
    </ul>
  </section>
)

export default Section
