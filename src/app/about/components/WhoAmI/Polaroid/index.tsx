import Image, { type ImageProps } from 'next/image'

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
    className={`select-none p-4 rounded-lg bg-gradient-to-b from-white to-gray-100 shadow-2xl dark:from-gray-200 dark:to-gray-200 text-center ${rotation[props.rotation]} hover:scale-105 hover:rotate-0 transition-transform ease-out`}
  >
    <div className="relative h-fit w-fit overflow-hidden rounded">
      <Image width="240" height="240" src={props.src} alt={props.label} />
      <div className="absolute inset-0 shadow-[inset_0_0_4px_rgba(0,0,0,.3)]" />
    </div>
    <p className="mt-3 text-center text-gray-600 dark:text-gray-800 md:text-lg xl:text-xl">
      {props.label}
    </p>
  </div>
)

export default Polaroid
