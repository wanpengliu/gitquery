(function () {
    var mod = angular.module("user-module");

    mod.controller('UserController', usrController);

    function usrController($scope, userFactory) {
        
        
        $scope.searchUser = function () {
            $scope.isLoading = true;
            console.log("user controller : user search for " + $scope.userquery);
            userFactory.query($scope.userquery).then(display);
        };

        function display(response) {
            $scope.isLoading = false;
            console.log(response.data);
            $scope.users = response.data;

        }
    }

})();