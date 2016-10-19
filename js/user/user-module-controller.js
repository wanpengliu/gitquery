(function () {
    var mod = angular.module("user-module");

    mod.controller('UserController', usrController);

    function usrController($scope, userFactory) {
        
        $scope.searchUser = function () {
            console.log("user controller : user search for " + $scope.userquery);
            userFactory.query($scope.userquery).then(display);
        };

        function display(response) {
            console.log(response.data);
            $scope.users = response.data;

        }
    }

})();