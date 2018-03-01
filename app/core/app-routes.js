modulo.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider

        .when("/submit", {
            templateUrl: "view/submit.html"
        })

        .when("/404", {
            templateUrl: "view/error/404.html"
        });

});
//
//
//
// var app = angular
//     .module('myapp', [
//         'ui.router'
//     ]);
//
// app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
//     $urlRouterProvider.otherwise("/404");
//
//     $stateProvider
//         .state('home', {
//             url: '/',
//             templateUrl: 'home.html',
//             controller: 'HomeController'
//         }).state('about', {
//             url: '/about',
//             templateUrl: 'about.html',
//             controller: 'AboutController'
//         }).state('404', {
//             url: '/404',
//             templateUrl: 'view/error/404.html',
//             controller: '404Ctrl'
//         }).state("submit", {
//             url : "/submit",
//             templateUrl : "view/submit.html",
//             controller : "submitCtrl"
//         }).state("403", {
//             url : "/403",
//             templateUrl : "view/error/403.html",
//             controller : "403Ctrl"
//         });
//     });
// app.controller('submitController', function($scope, $location) {
//     $scope.message = 'ok';
//     console.log($location.path())
// });
//
// app.controller('HomeController', function($scope, $location) {
//     $scope.message = 'Routing pages with ngRoute is damn awesome!';
//     console.log($location.path())
// });
//
// app.controller('AboutController', function($scope) {
//     $scope.message = 'You can see more about ngRoute in the oficial website.';
// });
//
// app.controller('ContactController', function($scope) {
//     $scope.message = 'No. :P';
// });

