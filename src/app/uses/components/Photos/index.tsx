import Image from 'next/image'

const pictures = ['workspace-left.jpeg', 'workspace-right.jpeg']

const Photos = () => (
  <>
    <div className="overflow-x-scroll hide-scrollbar flex snap-x snap-mandatory gap-4 sm:grid sm:snap-none sm:grid-cols-2">
      {pictures.map((picture, index) => (
        <Image
          key={picture}
          alt={`Carlos Cuesta's workspace, photo ${index + 1} of ${pictures.length}`}
          placeholder="blur"
          sizes="(max-width: 640px) 100vw, 50vw"
          src={require(`./${picture}`)}
          style={{ width: '100%', height: 'auto' }}
          className="rounded-xl snap-start"
          loading="eager"
        />
      ))}
    </div>
  </>
)

export default Photos
