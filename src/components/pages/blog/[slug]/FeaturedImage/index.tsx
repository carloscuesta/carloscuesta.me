type Props = {
  image: string
  lqpiImage: string
  title: string
}

const FeaturedImage = (props: Props) => (
  <header className="relative">
    <img
      alt={props.title}
      className="lazyload lazy-blur my-8 rounded-lg"
      data-src={props.image}
      title={props.title}
      src={props.lqpiImage}
      width={752}
      height={376}
    />
  </header>
)

export default FeaturedImage
