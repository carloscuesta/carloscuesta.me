import Image, { type ImageProps } from 'next/image'

import cn from 'src/utils/cn'

const rotation = {
  '-3': '-rotate-3',
  '1': 'rotate-1',
  '-2': '-rotate-2',
} as const

type Props = {
  label: string
  src: ImageProps['src']
  rotation: keyof typeof rotation
}

const Polaroid = (props: Props) => (
  <div
    className={cn(
      'select-none p-4 rounded-lg bg-gradient-to-b from-white to-neutral-100 shadow-2xl',
      'dark:from-neutral-200 dark:to-neutral-200 text-center hover:scale-105 hover:rotate-0',
      'transition-transform ease-out',
      rotation[props.rotation],
    )}
  >
    <div className="relative h-fit w-fit overflow-hidden rounded">
      <Image
        alt={props.label}
        height="240"
        loading="eager"
        placeholder="data:image/gif;base64,R0lGODlhAQABAPAAANTU1P///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        src={props.src}
        width="240"
      />
      <div className="absolute inset-0 shadow-[inset_0_0_4px_rgba(0,0,0,.3)]" />
    </div>
    <p className="mt-3 text-center text-neutral-600 dark:text-neutral-800 text-md">
      {props.label}
    </p>
  </div>
)

export default Polaroid
