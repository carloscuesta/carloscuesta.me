'use strict';

const app = require('./src/app/carloscuesta');
const ghost = require('ghost');
const port = process.env.PORT || 5000;

ghost({
	config: __dirname+'/src/blog/config.js'
}).then((ghostServer) => {
	app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
	app.use(function(req, res) {
		res.status(404);
		res.render('views/errors/404');
	});
	ghostServer.start(app);
});

if (!module.parent) {
	app.listen(port, function () {
  		console.log('carloscuesta @ '+port);
	});
}
