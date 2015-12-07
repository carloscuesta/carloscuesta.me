'use strict';

var request = require('supertest'),
	jade = require('jade'),
	should = require('should'),
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
	});
});

describe('github api', function() {
	it('should return a json', function(done) {
		request('https://api.github.com')
			.get('/users/carloscuesta/repos?sort=updated&direction=desc')
			.end(function(err, res) {
				res.type.should.equal('application/json');
				done();
			});
	});
});

describe('template rendering', function() {
	it('should return index template', function(done) {
		request(app)
			.get('/')
			.expect(200)
			.end(function(err, res) {
				var html = jade.renderFile('./src/app/templates/index.jade', {
					name: 'Carlos Cuesta',
                	title: 'Carlos Cuesta | Front End Developer',
                	github: "[]"
				});
				res.text.should.equal(html);
				done();
			});
	});
});
