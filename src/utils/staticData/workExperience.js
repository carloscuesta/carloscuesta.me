// @flow
export type JobPosition = {
  company: { link: string, logo: string, name: string },
  positions: Array<{
    dateFinish: ?string,
    dateStart: string,
    description: string,
    title: string
  }>
}

export type Experience = Array<JobPosition>

const workExperience: Experience = [
  {
    company: {
      link: 'https://ulabox.com',
      logo: 'https://res.cloudinary.com/carloscuesta/image/upload/v1593899513/about-me/ulabox.png',
      name: 'Ulabox'
    },
    positions: [
      {
        dateFinish: null,
        dateStart: '03/01/2018',
        title: 'Lead Front End Engineer',
        description: 'As a Lead Front End Engineer I mentored 3 developers. I helped to define, organize and breakdown new projects. I moved the whole website to React using SSR with Next.js. I built different React-Native applications for our logistic process and I maintained and introduced new features to the Ulabox application.'
      },
      {
        dateFinish: '03/01/2018',
        dateStart: '01/09/2017',
        title: 'Front End Engineer',
        description: 'I contributed to the release of the Ulabox React-Native application and maintained the website. Also I automated the process of shipping our native applications to stores using Fastlane.'
      }
    ]
  },
  {
    company: {
      link: 'https://www.bemediatic.com',
      logo: 'https://res.cloudinary.com/carloscuesta/image/upload/v1593899512/about-me/mediatic.png',
      name: 'Mediàtic'
    },
    positions: [
      {
        dateFinish: '12/23/2016',
        dateStart: '03/01/2015',
        title: 'Front End Developer',
        description: 'As a Front-End Developer on this marketing agency I built a lot of websites for our clients using HTML, CSS and JS with Wordpress as a CMS. I helped to improve the development internal tooling.'
      }
    ]
  },
  {
    company: {
      link: 'https://www.friendlyrentals.com',
      logo: 'https://res.cloudinary.com/carloscuesta/image/upload/v1593938160/about-me/friendlyrentals.png',
      name: 'Friendly Rentals'
    },
    positions: [
      {
        dateFinish: '02/11/2015',
        dateStart: '10/01/2014',
        title: 'Front End Developer Intern',
        description: 'As an intern I helped on building static pages of the website using Bootstrap, HTML and jQuery.'
      }
    ]
  }
]

export default workExperience
