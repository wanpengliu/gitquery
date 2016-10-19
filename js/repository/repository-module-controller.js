(function () {
    var mod = angular.module("repo-module");

    mod.controller('RepositoryController', repositoryController);
    function repositoryController($scope, repoFactory) {

        

        $scope.searchRepo = function () {
            console.log("repo search");
            repoFactory.query($scope.reposearch).then(display);

        }

        function display(response) {
            $scope.repos = response.data;
        }
    }

})();