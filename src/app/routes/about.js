const staticData = require('../data/static')

const about = (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=86400')

  res.render('views/aboutme', {
    me: staticData.me,
    site: staticData.site,
    social: staticData.social,
    cache: true
  })
}

module.exports = about
