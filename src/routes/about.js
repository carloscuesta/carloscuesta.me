const staticData = require('./data')

const about = (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=86400')
  res.render('aboutme', {
    cache: true,
    me: staticData.me,
    site: staticData.site,
    social: staticData.social
  })
}

module.exports = about
