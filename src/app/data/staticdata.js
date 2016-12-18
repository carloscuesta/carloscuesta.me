'use strict';

var staticData = {
	me: {
		name: 'Carlos Cuesta',
		age: 21,
		job: 'Front End Developer',
		company: 'Mediàtic',
		hometown: 'Badalona',
		aboutme: 'Front End developer based in Barcelona, Spain. Working at <a href="http://mediatic.cat" target="_blank" onmousedown="ga(\'send\', \'event\', \'Link\', \'Company\');",>Mediàtic</a>. Coding addicted that enjoys building things with code, I like design, technology and I <span class="heart">&#9829;</span> OpenSource.',
		mail: 'hi@carloscuesta.me',
		avatar: 'carloscuesta.jpeg',
		jobs: [
			{
        		position: {
					title: 'Front End Developer',
					dates: {
	        			start: '2015-03',
						finish: '2016-12',
						time: '1.8 Years'
	        		},
					tasks: [
						'Web development with, HTML, Jade, Sass, Gulp, Babel, CSS, JavaScript and CMS like Wordpress.',
						'Development of tools, to improve the company’s developer workflow.'
					]
				},
				company: {
					name: 'Mediàtic'
				},
			},
			{
        		position: {
					title: 'Front End Dev Internship',
					dates: {
	        			start: '2014-10',
						finish: '2015-02',
						time: '5 Months'
	        		},
					tasks: [
						'Front End development using Bootstrap, HTML, CSS, JavaScript and jQuery.'
					]
				},
				company: {
					name: 'Friendly Rentals'
				},
			}
		],
		education: [
			{
				title: 'D.A.W',
				dates: {
					start: '2013-09',
					finish: '2015-06',
					time: '2 Years'
				},
				tasks: [
					'Web Application Development - Certificate of Higher Education - "Ciclo Formativo de Grado Superior".'
				],
				school: 'ETP El Clot'
			},
			{
				title: 'Batxillerat Tecnològic',
				dates: {
					start: '2011-09',
					finish: '2013-06',
					time: '2 Years'
				},
				tasks: [],
				school: 'Col·legi Sant Andreu'
			}
		],
		skills: [
			{
				title: 'HTML5, Pug, Handlebars, CSS, Sass, Less, Gulp, Grunt',
				value: '90'
			},
			{
				title: 'JavaScript, Node.js, Npm, Express, MongoDB',
				value: '80'
			},
			{
				title: 'OS X, Terminal, Git, GitHub, DevTools, Testing',
				value: '100'
			},
		],
		awards: [
			{
				title: 'Best Final Project DAW',
				project: 'Wireframe Builder',
				year: '2015',
				organization: 'ETP El Clot'
			}
		],
		countriesVisited: [
			{
				flag: '🇫🇷',
				name: 'France'
			},
			{
				flag: '🇵🇱',
				name: 'Poland'
			},
			{
				flag: '🇨🇿',
				name: 'Czech Republic'
			},
			{
				flag: '🇦🇹',
				name: 'Austria'
			},
			{
				flag: '🇩🇪',
				name: 'Germany'
			},
			{
				flag: '🇨🇭',
				name: 'Switzerland'
			},
			{
				flag: '🇸🇪',
				name: 'Sweden'
			}
		]
	},

	social: {
		twitter: 'crloscuesta',
		github: 'carloscuesta',
		dribbble: 'carloscuesta',
		linkedin: 'crloscuesta'
	},

	site: {
		title: 'Carlos Cuesta | Front End Developer',
		description: 'Carlos Cuesta, Front End developer based in Barcelona, Spain. Coding addicted that enjoys building things with code, I like design, technology and OpenSource.',
		pages: {
			home: 'https://carloscuesta.me',
			blog: 'https://carloscuesta.me/blog',
			contact: 'mailto:hi@carloscuesta.me'
		}
	}
};

module.exports = staticData;
