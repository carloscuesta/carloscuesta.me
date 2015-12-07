'use strict';

var fetch = require('node-fetch'),
    ghData;

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
    fetch('https://api.github.com/users/carloscuesta/repos?sort=updated&direction=desc')
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
