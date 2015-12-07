'use strict';

require('dotenv').load();

var fetch = require('node-fetch'),
    ghData,
    baseUrl = 'https://api.github.com';

var data = {
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
    fetch(baseUrl+'/users/carloscuesta/repos?sort=updated&direction=desc&access_token='+process.env.GITHUB_TOKEN)
        .then(function(res) {
            return res.json();
        }).then(function(json) {
            ghData = json.slice(0,6);
            res.render('index', {
                githubData: ghData,
                name: data.me.name,
                title: data.site.title
            });
        });
};

