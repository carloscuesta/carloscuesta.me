import type { Job } from '../'
import CompanyLogo from './CompanyLogo'
import Timestamp from './Timestamp'

const Job = (props: Job) => {
  return (
    <div className="flex">
      <CompanyLogo url={props.company.logo} name={props.company.name} />

      <div className="flex grow flex-col">
        {props.positions.map((position) => (
          <a
            href={props.company.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start pb-2  transition-opacity hover:opacity-50"
            key={position.title}
          >
            <div className="grow pb-3 sm:px-4">
              <p className="font-medium">{position.title}</p>
              <p className="opacity-50">{props.company.name}</p>
            </div>

            <Timestamp
              dateFinish={position.dateFinish}
              dateStart={position.dateStart}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Job
