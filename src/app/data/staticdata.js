'use strict';

var staticData = {
	me: {
		name: 'Carlos Cuesta',
		age: 20,
		job: 'Front End Developer',
		company: 'Mediàtic',
		hometown: 'Badalona',
		aboutme: 'Front End developer based in Barcelona, Spain. Working at <a href="http://mediatic.cat" target="_blank" onmousedown="ga(\'send\', \'event\', \'Link\', \'Company\');",>Mediàtic</a>. Coding addicted that enjoys building things with code, I like design, tecnhology and I <span class="heart">&#9829;</span> OpenSource.',
		mail: 'hi@carloscuesta.me',
		avatar: 'carloscuesta.jpeg'
	},

	social: {
		twitter: 'crloscuesta',
		github: 'carloscuesta',
		dribbble: 'carloscuesta',
		linkedin: 'crloscuesta'
	},

	site: {
		title: 'Carlos Cuesta | Front End Developer',
		description: 'Carlos Cuesta, Front End developer based in Barcelona, Spain. Coding addicted that enjoys building things with code, I like design, tecnhology and OpenSource.',
		pages: {
			home: 'https://carloscuesta.me',
			blog: 'https://carloscuesta.me/blog',
			contact: 'mailto:hi@carloscuesta.me'
		}
	}
};

module.exports = staticData;
