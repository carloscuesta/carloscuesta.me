import Image from 'next/image'

import left from './workspace-left.webp'
import right from './workspace-right.webp'

const pictures = [left, right]

const Photos = () => (
  <>
    <div className="overflow-x-scroll hide-scrollbar flex snap-x snap-mandatory gap-4 sm:grid sm:snap-none sm:grid-cols-2">
      {pictures.map((picture, index) => (
        <Image
          key={index}
          alt={`Carlos Cuesta's workspace, photo ${index + 1} of ${pictures.length}`}
          placeholder="empty"
          sizes="(max-width: 640px) 100vw, 50vw"
          src={picture}
          style={{ width: '100%', height: 'auto' }}
          className="rounded-xl snap-start border dark:border-neutral-700"
          loading="eager"
          quality="90"
        />
      ))}
    </div>
  </>
)

export default Photos
