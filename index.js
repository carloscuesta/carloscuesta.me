const app = require('./src/app/carloscuesta')
const ghost = require('ghost')
const port = process.env.PORT || 5000

ghost({ config: `${__dirname}/src/blog/config.js` }).then((ghostServer) => {
  app.use(ghostServer.config.paths.subdir, ghostServer.rootApp)
  app.use((req, res) => {
    res.status(404)
    res.render('/errors/404')
  })
  ghostServer.start(app)
})

if (!module.parent) {
  app.listen(port, () => {
    console.log(`carloscuesta @ ${port}`)
  })
}
