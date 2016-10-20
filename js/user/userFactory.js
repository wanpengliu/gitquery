(function () {
    var mod = angular.module('user-module');
    mod.factory('userFactory', userFactory);

    var mod1 = angular.module('userdetails-module');
    mod1.factory('userFactory', userFactory);

    function userFactory($http) {

        return {

            query: function (location) {
                console.log("user factory - user search for " + location);
                var url = "https://api.github.com/search/users?q=repos:1 location:"
               + location;
                return $http.get(url);
            },

            getUser: userDetail
        }

            
        function userDetail(userid){
            
            console.log("search user " + userid);
            var url = "https://api.github.com/search/users?q="
           + userid;
            return $http.get(url);
        }
    } 


})();