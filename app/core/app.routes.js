app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/404");

    $stateProvider.state("nav", {
        abstract : true,
        url : "",
        views : {
            "nav@" : {
                templateUrl : "view/nav/nav.html",
                controller : "navCtrl"
            }
        }

    }).state("submit", {
        parent : "nav",
        url : "/admin/cambista/:idCambista",
        data : {
            role : "ADMIN"
        },
        views : {
            "content@" : {
                templateUrl : "view/submit/cambista.html",
                controller : "submitCtrl"
            }
        }
    }).state("404", {
        url : "/404",
        views : {
            "content@" : {
                templateUrl : "view/error/404.html",
                controller : "404Ctrl"
            }
        }
    }).state("403", {
        url : "/403",
        views : {
            "content@" : {
                templateUrl : "view/error/403.html",
                controller : "403Ctrl"
            }
        }
    });
});

