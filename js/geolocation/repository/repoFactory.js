(function () {
    var mod = angular.module('repo-module');
    mod.factory('repoFactory', repoFactory);

    function repoFactory($http) {

        return {

            query: function (repo) {
                console.log("repo factory - user search for " + repo);
                var url = "https://api.github.com/search/repositories?q="
               + repo + "+language:java&sort=stars&order=desc";
                return $http.get(url);
            }
        }
        
    }

    // https://api.github.com/search/users?q=repos:1&location:iceland
    // 

})();