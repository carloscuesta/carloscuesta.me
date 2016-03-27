'use strict';

var request = require('supertest'),
	should = require('should'),
	app = require ('../src/app/carloscuesta'),
	cache = require('memory-cache'),
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

	describe('caching', function() {

		it('should cache API JSON responses', function(done) {
			request(app)
				.get('/')
				.end(function(err, res) {
					cache.size().should.be.aboveOrEqual(1);
					done();
				});
		});

		it('should clear the cache', function(done) {
			request(app)
				.get('/'+process.env.PARAM_CLEAN)
				.end(function(err, res) {
					cache.size().should.be.belowOrEqual(0);
					done();
				});
		});
	});
});
