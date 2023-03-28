type Props = {
  image: string,
  lqpiImage: string,
  title: string
}

const FeaturedImage = (props: Props) => (
  <header className='relative'>
    <img
      alt={props.title}
      className='rounded-lg my-8 lazyload lazy-blur'
      data-src={props.image}
      title={props.title}
      src={props.lqpiImage}
      width={752}
      height={376}
    />
  </header>
)

export default FeaturedImage
