import { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Playground from './app/blog/[slug]/components/Playground'
import cn from 'src/utils/cn'

const components = {
  img: (props) => {
    const isDarkModeOnly = props.src.includes('#dark-mode-only')
    const isLightModeOnly = props.src.includes('#light-mode-only')

    return (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className={cn(
          isDarkModeOnly && 'hidden dark:block',
          isLightModeOnly && 'block dark:hidden',
        )}
        {...(props as ImageProps)}
      />
    )
  },
  Playground,
} satisfies MDXComponents

declare global {
  type MDXProvidedComponents = typeof components
}

export function useMDXComponents(): MDXProvidedComponents {
  return components
}
