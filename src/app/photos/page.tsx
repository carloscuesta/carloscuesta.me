import fs from 'fs'
import path from 'path'
import { type Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Photos',
  alternates: {
    canonical: '/photos',
  },
  openGraph: {
    url: '/photos',
  },
}

const Photos = () => {
  const images = fs
    .readdirSync(path.resolve('src/app/photos', 'shots'))
    .reverse()
  const isAboveTheFold = (index: number) => index < 4

  return (
    <section>
      <div className="grid gap-3 mx-3 my-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
        {images.map((image, index, images) => (
          <Image
            alt={`Photo ${index + 1} of ${images.length} by Carlos Cuesta`}
            key={image}
            placeholder="blur"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1536px) 33vw, 25vw"
            src={require(`./shots/${image}`)}
            style={{ width: '100%', height: 'auto' }}
            loading={isAboveTheFold(index) ? 'eager' : 'lazy'}
          />
        ))}
      </div>
    </section>
  )
}

export default Photos
