'use strict';

require('dotenv').load();
var GithubApiClient = require('./scripts/githubapiclient');

var staticData = {
    me: {
        name: 'Carlos Cuesta',
        bio: 'Front End Developer',
        location: 'Barcelona',
        aboutme: '',
        mail: 'hi@carloscuesta.me'
    },

    social: {
        twitter: 'crloscuesta',
        github: 'carloscuesta',
        dribbble: 'carloscuesta'
    },

    site: {
        title: 'Carlos Cuesta | Front End Developer',
        description: 'This is the website description'
    }
};

exports.index = function(req, res) {

    var ghUserCCStars = GithubApiClient.getSearch({
		q: 'user:carloscuesta',
		sort: 'stars',
		order: 'desc',
		per_page: 6
	});

    Promise.all([ghUserCCStars]).then(function(data) {
        res.render('index', {
            githubData: data[0],
            name: staticData.me.name,
            title: staticData.site.title
        });
    });
};
