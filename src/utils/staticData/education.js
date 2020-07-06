// @flow

export type Course = {
  dateFinish: ?string,
  dateStart: string,
  description: string,
  link: string,
  location: string,
  title: string
}

export type Education = Array<Course>

const educationHistory: Education = [
  {
    dateFinish: '06/05/2015',
    dateStart: '09/11/2013',
    description: 'A two years degree about building web applications. Using Front-End and Back-End technologies.',
    link: 'https://www.clot.fje.edu',
    location: 'Escola Jesuïtes El Clot',
    title: 'CFGS DAW'
  },
  {
    dateFinish: null,
    dateStart: '12/15/1995',
    description: 'The things I learned by myself became the vast majority of what I know today. #AlwaysLearning',
    link: '#',
    location: 'anywhere in the 🌍',
    title: 'Self-taught'
  }
]

export default educationHistory
