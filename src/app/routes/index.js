const githubClient = require('../apiclients/github');
const twitterClient = require('../apiclients/twitter');
const ghostClient = require('../apiclients/ghost');
const staticData = require('../data/static');

const index = (req, res) => {
	res.setHeader('Cache-Control', 'public, max-age=86400');

	const githubData = githubClient.getSearch({
		q: 'user:carloscuesta',
		sort: 'stars',
		order: 'desc',
		access_token: process.env.GITHUB_TOKEN,
		per_page: 6
	});

	const twitterData = twitterClient.getUserTimeline({
		screen_name: 'crloscuesta',
		count: 1,
		exclude_replies: false,
		include_rts: true
	});

	const blogData = ghostClient.getLastPosts({
		client_id: process.env.GHOST_CLIENT_ID,
		client_secret: process.env.GHOST_CLIENT_SECRET,
		limit: 2,
		include: 'tags'
	});

	Promise.all([githubData, twitterData, blogData]).then((data) => {
		const repos = githubClient.mutator(data[0])
		const tweets = twitterClient.mutator(data[1])
		const posts = ghostClient.mutator(data[2])

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
