import type { Job as JobItem } from '../'
import CompanyLogo from './CompanyLogo'
import Timestamp from './Timestamp'

type PositionContentProps = {
  title: JobItem['positions'][number]['title']
  companyName: JobItem['company']['name']
  dateStart: JobItem['positions'][number]['dateStart']
  dateFinish: JobItem['positions'][number]['dateFinish']
}

const PositionContent = (props: PositionContentProps) => (
  <>
    <div className="grow pb-3 sm:px-4">
      <p className="font-medium">{props.title}</p>
      <p className="opacity-50">{props.companyName}</p>
    </div>

    <Timestamp dateFinish={props.dateFinish} dateStart={props.dateStart} />
  </>
)

const Job = (props: JobItem) => {
  return (
    <div className="flex">
      <CompanyLogo url={props.company.logo} name={props.company.name} />

      <div className="flex grow flex-col">
        {props.positions.map((position) =>
          props.company.link ? (
            <a
              href={props.company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start pb-2  transition-opacity hover:opacity-50"
              key={position.title}
            >
              <PositionContent
                title={position.title}
                companyName={props.company.name}
                dateStart={position.dateStart}
                dateFinish={position.dateFinish}
              />
            </a>
          ) : (
            <div className="flex items-start pb-2" key={position.title}>
              <PositionContent
                title={position.title}
                companyName={props.company.name}
                dateStart={position.dateStart}
                dateFinish={position.dateFinish}
              />
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default Job
