'use strict';

var path = require('path'),
    config;

require('dotenv').load();

config = {
    production: {
        url: 'http://carloscuesta.me/blog',

        mail: {
    		transport: 'SMTP',
    		options: {
    		    service: 'Gmail',
    		    auth: {
    		        user: process.env.EMAIL,
    		        pass: process.env.EMAIL_PASSWORD
    		    }
    		}
		},

        database: {
            client: 'pg',
            connection: {
                host: process.env.DATABASE_HOST,
				user: process.env.DATABASE_USER,
				password: process.env.DATABASE_PASSWORD,
				database: process.env.DATABASE_NAME,
				port: process.env.DATABASE_PORT,
				ssl: true
            },
            debug: false
        },

        server: {
            host: '127.0.0.1',
            port: '2368'
        },

        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    development: {
        url: 'http://localhost:5000/blog',

        mail: {
    		transport: 'SMTP',
    		options: {
    		    service: 'Gmail',
    		    auth: {
    		        user: process.env.EMAIL,
    		        pass: process.env.EMAIL_PASSWORD
    		    }
    		}
		},

        database: {
            client: 'pg',
            connection: {
                host: process.env.DATABASE_HOST,
				user: process.env.DATABASE_USER,
				password: process.env.DATABASE_PASSWORD,
				database: process.env.DATABASE_NAME,
				port: process.env.DATABASE_PORT,
				ssl: true
            },
            debug: false
        },

        server: {
            host: '127.0.0.1',
            port: '2368'
        },

        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    }
};

module.exports = config;
