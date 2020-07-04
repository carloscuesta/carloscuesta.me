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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        dateFinish: '03/01/2018',
        dateStart: '01/09/2017',
        title: 'Front End Engineer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ]
  },
  {
    company: {
      link: 'https://www.friendlyrentals.com',
      logo: 'https://res.cloudinary.com/carloscuesta/image/upload/v1593938160/about-me/friendlyrentals.png',
      name: 'Friendly Rentals',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    positions: [
      {
        dateFinish: '02/11/2015',
        dateStart: '10/01/2014',
        title: 'Front End Developer Intern',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ]
  }
]

export default workExperience
