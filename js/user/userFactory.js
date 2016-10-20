(function () {
    var mod = angular.module('user-module');
    mod.factory('userFactory', userFactory);

    function userFactory($http) {

        return {

            query: function (location) {
                console.log("user factory - user search for " + location);
                var url = "https://api.github.com/search/users?q=repos:1 location:"
               + location;
                return $http.get(url);
            }
        }
        
    }


})();