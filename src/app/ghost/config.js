var path = require('path'),
    config;

if (process.env.NODE_ENV === 'development') {
	require('dotenv').load();
}

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
    },

    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

module.exports = config;
