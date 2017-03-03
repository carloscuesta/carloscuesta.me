const cache = require('memory-cache');

const cacheClean = (req, res) => {
	cache.clear();
	res.redirect('/');
};

module.exports = cacheClean;
