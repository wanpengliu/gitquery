/// <reference path="../user/user.html" />
/// <reference path="../user/user.html" />
(function () {
    //register the app

    var mod = angular.module('jqApp', ['ngRoute','user-module', 'repo-module']);
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
        });
        //.otherwise({redirectTo: '/'});
    });
})(); 