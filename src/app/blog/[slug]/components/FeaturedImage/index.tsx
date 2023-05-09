import Image from 'next/image'

type Props = {
  image: string
  lqpiImage: string
  title: string
}

const FeaturedImage = (props: Props) => (
  <header className="relative">
    <Image
      alt={props.title}
      blurDataURL={props.lqpiImage}
      className="my-8 rounded-lg"
      height={376}
      placeholder="blur"
      src={props.image}
      width={752}
    />
  </header>
)

export default FeaturedImage
