import NextLink from 'next/link'
import Image from 'next/image'

import Wrapper from 'src/components/shared/Wrapper'
import Metadata from './Metadata'

const Link = (props: { href: string; label: string }) => {
  const linkClassName = 'underline-offset-2 underline'

  if (props.href.startsWith('/')) {
    ;<NextLink href={props.href} className={linkClassName}>
      {props.label}
    </NextLink>
  }

  return (
    <a
      target="_blank"
      href={props.href}
      className={linkClassName}
      rel="noopener noreferrer"
    >
      {props.label}
    </a>
  )
}

const Biography = () => (
  <section className="my-12">
    <Wrapper>
      <Metadata />

      <div className="flex justify-between gap-8">
        <div>
          <h1 className="flex gap-2 pb-4 text-2xl">
            <span className="font-bold">Hey, I'm Carlos Cuesta</span>
            <span className="inline-block origin-[70%_70%] animate-wave">
              👋🏼
            </span>
          </h1>

          <div className="grid gap-4">
            <p className="sm:max-w-md">
              I'm a Front End Engineer based in Barcelona. I{' '}
              <Link href="https://github.com/carloscuesta" label="code" />,{' '}
              <Link href="/blog" label="write" /> and build stuff on internet.
            </p>

            <p className="sm:max-w-md">
              I love working in-between product, engineering and developer
              experience, currently at{' '}
              <Link href="https://n26.com" label="N26" />.
            </p>
          </div>
        </div>

        <Image
          alt="Carlos Cuesta"
          src="https://res.cloudinary.com/carloscuesta/image/upload/s--ekQN9GP_--/c_scale,w_320/v1594588508/carloscuesta.jpg"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRvQCAABXRUJQVlA4WAoAAAAgAAAAOQAAOQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggBgEAAJALAJ0BKjoAOgA+bTCSRiQjIaEwFgkAgA2JQBWHOBs/zMoLISaWACRRJkfyBI4Lxdd/xd03yJpIGFTUqOQGP4xGt8WUYj9jng+v+2wjcftkQSQUlbocxVkWWLjln0a0IfovTZIAAP70062J9GjrH7g8QW5d3F+LQ8rXmHN3okrCe1/lyHE1N4J7O4QOlbIkk3Z32UNX6AwqF01B+DCejpwmvHfxAntOE/kxlbpt/hamu8MLs/k+nwpMp4g1BIvX+zQnii+y1Kl3Frd5sNA18WL4mwthjxSBIjPSiiMNEjmgFriUlUlYCmgWI0KnfUFVrqpG5rSDeBN77cUw84dmPu7Q3pMAAAA="
          className="hidden h-44 w-44 transform-gpu rounded-full sm:block"
          width={176}
          height={176}
        />
      </div>
    </Wrapper>
  </section>
)

export default Biography
