import Button from './Button'

type Props = {
  canonicalUrl: string
  slug: string
  title: string
}

const ShareLinks = (props: Props) => (
  <section className="my-8">
    <p className="pb-6 text-xl font-bold tracking-tight">
      Enjoyed the article? 😍
    </p>
    <div className="grid grid-cols-1 gap-3 sm:grid-flow-col sm:grid-cols-[repeat(3,max-content)]">
      <Button
        label="Share on Twitter"
        href={`https://twitter.com/intent/tweet?text=${props.title}&url=${props.canonicalUrl}&via=crloscuesta`}
      />

      <Button
        label="Discuss on Twitter"
        href={`https://twitter.com/search?q=${props.canonicalUrl}`}
      />
    </div>
  </section>
)

export default ShareLinks
