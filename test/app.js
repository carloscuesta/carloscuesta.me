'use strict';

var request = require('supertest'),
	should = require('should'),
	githubClient = require('../src/app/scripts/githubapiclient'),
	app = require ('../src/app/carloscuesta'),
	port = process.env.PORT || 5000;

describe('app', function() {
 	before(function () {
        app.listen(port);
  	});

	describe('status', function() {

		it('should return 200 Ok', function(done) {
			request(app)
				.get('/')
				.end(function(err, res) {
					res.status.should.equal(200);
					done();
				});
		});

		it('should return 404 Not found', function(done) {
			request(app)
				.get('/404')
				.end(function(err, res) {
					res.status.should.equal(404);
					done();
				});
		});
	});
});
