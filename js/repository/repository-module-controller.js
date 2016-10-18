(function () {
    var mod = angular.module("repo-module");

    mod.controller('RepositoryController', repositoryController);
    function repositoryController($scope) {
        
        $scope.repos=[{"id":1, "name":"repo1"},{"id":2, "name":"repo2"}];

        }
    
})();