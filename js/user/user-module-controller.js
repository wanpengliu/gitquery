(function () {
    var mod = angular.module("user-module");

    mod.controller('UserController', usrController);
    function usrController($scope, userFactory) {
        
        $scope.users = userFactory;

        $scope.searchUser = function () {
            userFactory;
        };

    }

})();