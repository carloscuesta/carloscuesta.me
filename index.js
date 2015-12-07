'use strict';

var app = require('./src/app/carloscuesta.js'),
	port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log('carloscuesta @ '+port);
});
