'use strict'

const moment = require('moment')

const me = {
  aboutme: 'I\'m a 23 years old <strong>Front End Engineer</strong> based in <b>Barcelona</b>, working at <a href="https://ulabox.com" rel="noopener"><strong>Ulabox</strong></a>. I\'m a coding addicted that is focused on JavaScript, specifically in React and React-Native. I like design, technology, sneakers and I ❤️ <b>OpenSource</b>.',
  age: 23,
  avatar: 'carloscuesta.jpg',
  companyName: 'Ulabox',
  countriesVisited: [
    { flag: '🇫🇷', name: 'France' },
    { flag: '🇵🇱', name: 'Poland' },
    { flag: '🇨🇿', name: 'Czech Republic' },
    { flag: '🇦🇹', name: 'Austria' },
    { flag: '🇩🇪', name: 'Germany' },
    { flag: '🇨🇭', name: 'Switzerland' },
    { flag: '🇸🇪', name: 'Sweden' },
    { flag: '🇳🇱', name: 'Netherlands' },
    { flag: '🇸🇰', name: 'Slovakia' },
    { flag: '🇬🇧', name: 'United Kingdom' }
  ],
  job: 'Front End Engineer',
  mail: 'hi@carloscuesta.me',
  name: 'Carlos Cuesta',
  social: {
    dribbble: 'carloscuesta',
    github: 'carloscuesta',
    linkedin: 'crloscuesta',
    twitter: 'crloscuesta'
  }
}

const jobs = [
  {
    companyName: 'Ulabox',
    dateFinish: 'Present',
    dateStart: '2017-01',
    tasks: [''],
    time: moment([2017, 0, 9]).fromNow(true),
    title: 'Front End Developer'
  },
  {
    companyName: 'Mediàtic',
    dateFinish: '2016-12',
    dateStart: '2015-03',
    tasks: [
      'Web development with, HTML, Jade, Sass, Gulp, Babel, CSS, JavaScript and CMS like Wordpress.',
      'Development of tools, to improve the company’s developer workflow.'
    ],
    time: '1.8 Years',
    title: 'Front End Developer'
  },
  {
    companyName: 'Friendly Rentals',
    dateFinish: '2015-02',
    dateStart: '2014-10',
    tasks: [
      'Front End development using Bootstrap, HTML, CSS, JavaScript and jQuery.'
    ],
    time: '5 Months',
    title: 'Front End Dev Internship'
  }
]

const education = [
  {
    dateStart: '2013-09',
    dateFinish: '2015-06',
    school: 'ETP El Clot',
    tasks: [
      'Web Application Development - Certificate of Higher Education - "Ciclo Formativo de Grado Superior".'
    ],
    time: '2 Years',
    title: 'D.A.W'
  },
  {
    dateStart: '2011-09',
    dateFinish: '2013-06',
    school: 'Col·legi Sant Andreu',
    tasks: [],
    time: '2 Years',
    title: 'Batxillerat Tecnològic'
  }
]

const skills = [
  {
    title: 'HTML5, Pug, Handlebars, CSS, Sass, Less, Gulp, Grunt',
    value: '90'
  },
  {
    title: 'JavaScript, React, React Native, Node.js, Npm, Yarn, Express, MongoDB',
    value: '80'
  },
  {
    title: 'OS X, Terminal, Git, GitHub, DevTools, Testing',
    value: '100'
  }
]

const awards = [
  {
    organization: 'ETP El Clot',
    project: 'Wireframe Builder',
    title: 'Best Final Project DAW',
    year: '2015'
  }
]

const site = {
  description: 'Carlos Cuesta, Front End engineer based in Barcelona, Spain. Coding addicted that is focused on JavaScript. I like design, technology, sneakers and I ❤️ OpenSource',
  title: 'Carlos Cuesta | Front End Engineer',
  pages: {
    blog: 'https://carloscuesta.me/blog',
    contact: 'mailto:hi@carloscuesta.me',
    home: 'https://carloscuesta.me'
  }
}

const staticData = {
  me: Object.assign(me, { jobs, education, awards, skills }),
  social: me.social,
  site: site
}

module.exports = staticData
