import Image from 'next/image'

type Props = { url: string; name: string }

const CompanyLogo = (props: Props) => (
  <div>
    <Image
      className="hidden rounded-xl sm:block"
      alt={props.name}
      blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      src={props.url}
      width={48}
      height={48}
    />
  </div>
)

export default CompanyLogo
