const githubClient = require('../apiclients/github');
const twitterClient = require('../apiclients/twitter');
const ghostClient = require('../apiclients/ghost');
const staticData = require('../data/staticdata');

const index = (req, res) => {
	res.setHeader('Cache-Control', 'public, max-age=86400');

	var githubData = githubClient.getSearch({
		q: 'user:carloscuesta',
		sort: 'stars',
		order: 'desc',
		access_token: process.env.GITHUB_TOKEN,
		per_page: 6
	});

	var twitterData = twitterClient.getUserTimeline({
		screen_name: 'crloscuesta',
		count: 1,
		exclude_replies: false,
		include_rts: true
	});

	var blogData = ghostClient.getLastPosts({
		client_id: process.env.GHOST_CLIENT_ID,
		client_secret: process.env.GHOST_CLIENT_SECRET,
		limit: 2,
		include: 'tags'
	});

	Promise.all([githubData, twitterData, blogData]).then((data) => {
		var repos = githubClient.parseRepos(data[0]);
		var tweets = twitterClient.parseTweets(data[1]);
		var posts = ghostClient.parsePosts(data[2]);

		res.render('views/index', {
			githubData: repos,
			twitterData: tweets,
			ghostData: posts,
			me: staticData.me,
			site: staticData.site,
			social: staticData.social,
			cache: true
		});
	});
};

module.exports = index;
