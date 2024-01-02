import fs from 'fs'
import path from 'path'
import Image from 'next/image'

const Photos = () => {
  const images = fs.readdirSync(path.resolve('src/app/photos', 'shots'))

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
