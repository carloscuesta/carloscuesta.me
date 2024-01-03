import fs from 'fs'
import path from 'path'
import { type Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Photos',
  alternates: {
    canonical: '/photos',
  },
}

const Photos = () => {
  const images = fs
    .readdirSync(path.resolve('src/app/photos', 'shots'))
    .reverse()

  return (
    <section>
      <div className="grid gap-3 mx-3 my-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {images.map((image) => (
          <Image
            alt=""
            key={image}
            placeholder="blur"
            src={require(`./shots/${image}`)}
            quality={100}
          />
        ))}
      </div>
    </section>
  )
}

export default Photos
