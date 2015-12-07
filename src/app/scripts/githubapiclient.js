var ApiClient = require('./apiclient');

var GithubApiClient = (function() {

    var _ApiClient = new ApiClient({
        'base_url': 'https://api.github.com',
        'cache': 5
    });

    var getUserRepos = function(userName, params) {
        return _ApiClient.get('/users/'+userName+'/repos', params);
    };

    var getSearch = function(params){
    	return _ApiClient.get('/search/repositories', params);
    };

 	var getOrgRepos = function(orgName, params) {
        return _ApiClient.get('/orgs/'+orgName+'/repos', params);
    };

    var getRepo = function(userName, repoName, params){
    	return _ApiClient.get('/repos/'+userName+'/'+repoName, params);
    };

    return {
        getUserRepos: getUserRepos,
        getSearch: getSearch,
        getOrgRepos: getOrgRepos,
        getRepo: getRepo
    };
})();

module.exports = GithubApiClient;
