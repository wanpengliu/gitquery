(function () {
    var mod = angular.module("user-module");

    mod.controller('UserController', usrController);
    function usrController($scope) {
        
        $scope.users=[{"id":1, "name":"john"},{"id":2, "name":"wanpeng"}];

        
    }
})();