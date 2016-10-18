(function () {
    var mod = angular.module("jqApp");

    mod.controller('jqController', jqController);
    function jqController($scope) {
        $scope.repositories = ['repo1', 'repo2'];

        $scope.new = function () {
            $scope.repositories.push($scope.newRepo);
            $scope.newRepo = '';

        }
    }
})();