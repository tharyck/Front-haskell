// angular.module("funcional", ['ngRoute', 'myApp.version']).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('#');
//
//   $routeProvider.otherwise({redirectTo: './view/submit'});
// }]);

var app = angular.module('funcional', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('submit');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeController'
        }).state('about', {
        url: '/about',
        templateUrl: 'about.html',
        controller: 'AboutController'
    }).state('404', {
        url: '/404',
        templateUrl: 'view/error/404.html',
        controller: '404Ctrl'
    }).state("submit", {
        url : "/submit",
        templateUrl : "view/submit.html",
        controller : "submitCtrl"
    }).state("403", {
        url : "/403",
        templateUrl : "view/error/403.html",
        controller : "403Ctrl"
    });
});