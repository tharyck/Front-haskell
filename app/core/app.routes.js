app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/404");

    $stateProvider
        .state('404', {
            url: '/404',
            templateUrl: 'view/error/404.html',
            controller: "" //"404Ctrl"
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