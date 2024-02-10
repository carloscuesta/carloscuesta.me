import Image from 'next/image'

const pictures = ['workspace-left.jpeg', 'workspace-right.jpeg']

const Photos = () => (
  <>
    <style>
      {`
        .workspacePhotos::-webkit-scrollbar {
          -webkit-appearance: none;
          display: none;
        }
      `}
    </style>
    <div className="overflow-x-scroll workspacePhotos flex snap-x snap-mandatory gap-4 sm:grid sm:snap-none sm:grid-cols-2">
      {pictures.map((picture) => (
        <Image
          key={picture}
          alt="Carlos Cuesta workspace"
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
