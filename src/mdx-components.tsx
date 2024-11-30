import { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Playground from './app/blog/[slug]/components/Playground'

const components = {
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      {...(props as ImageProps)}
    />
  ),
  Playground,
} satisfies MDXComponents

declare global {
  type MDXProvidedComponents = typeof components
}

export function useMDXComponents(): MDXProvidedComponents {
  return components
}
