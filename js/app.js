(function() {
    var app = angular.module("adminManager", ['ngRoute']);

    app.config(function($locationProvider, $routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'templates/login/login.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            })
            .when('/forgot', {
                templateUrl: 'templates/login/forgot.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            })
            .otherwise({
                redirectTo: '/login'
            });
    });
}());