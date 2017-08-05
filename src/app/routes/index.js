const staticData = require('./data')
const githubClient = require('./apiClients/github')
const twitterClient = require('./apiClients/twitter')
const ghostClient = require('./apiClients/ghost')

const index = (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=86400')

  const githubData = githubClient.getSearch({
    access_token: process.env.GITHUB_TOKEN,
    order: 'desc',
    per_page: 6,
    q: 'user:carloscuesta',
    sort: 'stars'
  })

  const twitterData = twitterClient.getUserTimeline({
    screen_name: 'crloscuesta',
    count: 1,
    exclude_replies: false,
    include_rts: true
  })

  const blogData = ghostClient.getLastPosts({
    client_id: process.env.GHOST_CLIENT_ID,
    client_secret: process.env.GHOST_CLIENT_SECRET,
    include: 'tags',
    limit: 2
  })

  Promise.all([githubData, twitterData, blogData]).then((data) => {
    const repos = githubClient.mutator(data[0])
    const tweets = twitterClient.mutator(data[1])
    const posts = ghostClient.mutator(data[2])

    res.render('index', {
      cache: true,
      ghostData: posts,
      githubData: repos,
      me: staticData.me,
      site: staticData.site,
      social: staticData.social,
      twitterData: tweets
    })
  })
}

module.exports = index
