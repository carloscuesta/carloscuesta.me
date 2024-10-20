import NextImage, { ImageProps } from 'next/image'

const Image = (props: unknown) => (
  <NextImage sizes="100vw" {...(props as ImageProps)} />
)

export default Image
