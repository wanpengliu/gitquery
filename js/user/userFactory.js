(function () {
    var mod = angular.module('user-module');
    mod.factory('userFactory', userFactory);

    function userFactory() {
        var users = [{ "id": 1, "name": "john" }, { "id": 2, "name": "wanpeng" }];
        return users;
        
    }

})();