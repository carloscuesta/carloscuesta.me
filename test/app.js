'use strict';

var request = require('supertest'),
	should = require('should'),
	app = require ('../src/app/carloscuesta'),
	cache = require('memory-cache'),
	port = process.env.PORT || 3000;

describe('app', function() {
 	before(function () {
        app.listen(port);
  	});

	describe('views', function() {

		describe('index', function() {

			it('should render and return 200 OK ', function(done) {
				request(app)
					.get('/')
					.end(function(err, res) {
						res.status.should.equal(200);
						done();
					});
			});

			describe('caching', function() {

				it('should return the cache-control header with max-age 1 day', function(done) {
					request(app)
						.get('/')
						.end(function(err, res) {
							res.headers['cache-control'].should.be.equal('public, max-age=86400');
							done();
						});
				});

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

		describe('aboutme', function() {

			it('should render and return 200 OK ', function(done) {
				request(app)
					.get('/aboutme')
					.end(function(err, res) {
						res.status.should.equal(200);
						done();
					});
			});

			describe('caching', function() {

				it('should return the cache-control header with max-age 1 day', function(done) {
					request(app)
						.get('/')
						.end(function(err, res) {
							res.headers['cache-control'].should.be.equal('public, max-age=86400');
							done();
						});
				});
			});

		});
	});
});
