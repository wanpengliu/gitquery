/// <reference path="../user/user.html" />
/// <reference path="../user/user.html" />
(function () {
    //register the app

    var mod = angular.module('jqApp', ['ngRoute', 'user-module', 'repo-module', 'gqChart', 'userdetails-module']);
    mod.config(function ($routeProvider) {
        $routeProvider
        .when("/", {
            controller: 'UserController',
            templateUrl: 'js/user/user.html'
        })

        .when("/user", {
            controller: 'UserController',
            templateUrl: 'js/user/user.html'
        })

        .when("/repo", {
            controller: 'RepositoryController',
            templateUrl: 'js/repository/repo.html'
        })

        .when("/userDetails", {
            controller: 'UserDetailsController',
            controllerAs : 'ud',
            templateUrl:'js/user/userdetails.html'
        })
        // .when('/chart', {
        //     controller: 'gqChartController',
        //     controllerAs: 'gqchart',
        //     templateUrl: 'js/chart/chart.html'
        // });
        .otherwise({redirectTo: '/'});
    });
})(); 