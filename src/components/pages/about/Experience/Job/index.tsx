import type { Job } from '../'
import CompanyLogo from './CompanyLogo'
import Timestamp from './Timestamp'

const Job = (props: Job) => {
  return (
    <div className="flex">
      <CompanyLogo url={props.company.logo} name={props.company.name} />

      <div className="flex flex-col grow">
        {props.positions.map((position) => (
          <a href={props.company.link} target='_blank' rel='noopener noreferrer' className="flex pb-2 items-start  transition-opacity hover:opacity-50" key={position.title}>
            <div className="sm:px-4 grow pb-3">
              <p className="font-medium">{position.title}</p>
              <p className='opacity-50'>{props.company.name}</p>
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
