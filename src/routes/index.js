const staticData = require('./data')
const githubClient = require('./apiClients/github')
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

  const blogData = ghostClient.getLastPosts({
    client_id: process.env.GHOST_CLIENT_ID,
    client_secret: process.env.GHOST_CLIENT_SECRET,
    include: 'tags',
    limit: 2
  })

  Promise.all([githubData, blogData]).then((data) => {
    const repos = githubClient.mutator(data[0])
    const posts = ghostClient.mutator(data[1])

    res.render('index', {
      cache: true,
      ghostData: posts,
      githubData: repos,
      me: staticData.me,
      site: staticData.site,
      social: staticData.social
    })
  })
}

module.exports = index
