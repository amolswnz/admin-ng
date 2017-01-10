(function() {
    var app = angular.module("adminManagerMain", ['ngRoute']);

    app.config(function($locationProvider, $routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/admin/home.html',
                controller: 'HomeController',
                controllerAs: 'userCtrl'
            })
            .when('/add', {
                templateUrl: 'templates/admin/add.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
            })
            .when('/view', {
                templateUrl: 'templates/admin/viewAll.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
            })
            .when('/edit', {
                templateUrl: 'templates/admin/edit.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
            })
            .when('/delete', {
                templateUrl: 'templates/admin/delete.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
            })            
            .when('/view/:id', {
                templateUrl: 'templates/admin/view.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
            })
            .when('/edit/:id', {
                templateUrl: 'templates/admin/edit.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
            })
            .when('/delete/:id', {
                templateUrl: 'templates/admin/delete.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });
}());