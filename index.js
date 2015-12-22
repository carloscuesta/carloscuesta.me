'use strict';

var app = require('./src/app/carloscuesta.js'),
	ghost = require('ghost'),
	port = process.env.PORT || 5000;

ghost({
	config: __dirname+'/src/app/ghost/config.js'
}).then(function (ghostServer) {
	app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
	ghostServer.start(app);
});

if (!module.parent) {
	app.listen(port, function () {
  		console.log('carloscuesta @ '+port);
	});
}
