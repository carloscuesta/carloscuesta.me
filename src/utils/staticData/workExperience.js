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
      link: 'https://n26.com',
      logo: 'https://res.cloudinary.com/carloscuesta/image/upload/v1617353828/about-me/n26.png',
      name: 'N26'
    },
    positions: [
      {
        dateFinish: null,
        dateStart: '09/01/2022',
        title: 'Lead Web Engineer',
        description: ''
      },
      {
        dateFinish: '09/01/2022',
        dateStart: '04/01/2021',
        title: 'Senior Web Engineer',
        description: ''
      }
    ]
  },
  {
    company: {
      link: 'https://ulabox.com',
      logo: 'https://res.cloudinary.com/carloscuesta/image/upload/v1593899513/about-me/ulabox.png',
      name: 'Ulabox'
    },
    positions: [
      {
        dateFinish: '03/26/2021',
        dateStart: '03/01/2018',
        title: 'Lead Front End Engineer',
        description: 'As a Lead Front End Engineer, one of my main tasks was to mentor coworkers of my team, contributing to their personal and professional growth. I worked very close to stakeholders to define, organise and breakdown new projects. One of the biggest challenges I faced with my team was to migrate the ulabox.com website to a new business model while refactoring the entire technology stack to Next.js and React. We had to integrate this pivot into the Ulabox application too. I\'ve worked with the logistics team to build Android applications with React-Native for our supply chain and dark stores.'
      },
      {
        dateFinish: '03/01/2018',
        dateStart: '01/09/2017',
        title: 'Front End Engineer',
        description: 'As a Front End Engineer I contributed to the development and release of the native Ulabox application. The application is built with React-Native and is available on iOS and Android. I worked on automating the process of shipping our applications to the stores using Fastlane and Travis-CI. Also I contributed to the maintenance of our website, that was built on top of Symfony using Twig, SCSS and JavaScript.'
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
        description: 'As a Front-End Developer I created a lot of different websites for our clients using Wordpress as a CMS and HTML, CSS and JavaScript to built the sites. I helped to improve the developer experience of the company by implementing tools to improve our software development process.'
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
        description: 'As an intern on Friendly Rentals I helped on building pages of the website using Bootstrap, HTML, CSS and jQuery.'
      }
    ]
  }
]

export default workExperience
