import SectionTitle from 'src/components/SectionTitle'
import JobPosition from './Job'

type Month =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12'

type Year = `20${string}`

type DateFormat = `${Month}/${string}/${Year}`

export type Job = {
  company: { link: string; logo: string; name: string }
  positions: {
    dateFinish: DateFormat | null
    dateStart: DateFormat
    title: string
  }[]
}

const work: Job[] = [
  {
    company: {
      link: 'https://n26.com',
      logo: 'https://res.cloudinary.com/carloscuesta/image/upload/v1617353828/about-me/n26.png',
      name: 'N26',
    },
    positions: [
      {
        dateFinish: '05/16/2025',
        dateStart: '09/01/2022',
        title: 'Lead Web Engineer',
      },
      {
        dateFinish: '09/01/2022',
        dateStart: '04/01/2021',
        title: 'Senior Web Engineer',
      },
    ],
  },
  {
    company: {
      link: '#',
      logo: 'https://res.cloudinary.com/carloscuesta/image/upload/v1593899513/about-me/ulabox.png',
      name: 'Ulabox',
    },
    positions: [
      {
        dateFinish: '03/26/2021',
        dateStart: '03/01/2018',
        title: 'Lead Front End Engineer',
      },
      {
        dateFinish: '03/01/2018',
        dateStart: '01/09/2017',
        title: 'Front End Engineer',
      },
    ],
  },
  {
    company: {
      link: 'https://www.bemediatic.com',
      logo: 'https://res.cloudinary.com/carloscuesta/image/upload/v1679519489/about-me/mediatic.jpg',
      name: 'Mediàtic',
    },
    positions: [
      {
        dateFinish: '12/23/2016',
        dateStart: '03/01/2015',
        title: 'Front End Developer',
      },
    ],
  },
  {
    company: {
      link: 'https://www.friendlyrentals.com',
      logo: 'https://res.cloudinary.com/carloscuesta/image/upload/v1593938160/about-me/friendlyrentals.png',
      name: 'Friendly Rentals',
    },
    positions: [
      {
        dateFinish: '02/11/2015',
        dateStart: '10/01/2014',
        title: 'Front End Developer Intern',
      },
    ],
  },
]

const Work = () => (
  <section>
    <SectionTitle title="Work" />
    {work.map((job, idx) => (
      <JobPosition {...job} key={idx} />
    ))}
  </section>
)

export default Work
