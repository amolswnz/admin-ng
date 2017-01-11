(function() {
    var app = angular.module("adminManagerMain", 
                        ['ngRoute', 'angularUtils.directives.dirPagination', 'angular-loading-bar']);

    app.config(function($locationProvider, $routeProvider) {
            console.log("test2");

        $routeProvider
            .when('/home', {
                templateUrl: 'templates/admin/home.html',
                controller: 'HomeController',
                controllerAs: 'userCtrl'
            })
            .when('/add', {
                templateUrl: 'templates/admin/add.html'
            })
            .when('/view', {
                templateUrl: 'templates/admin/view.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
               })
            .when('/update', {
                templateUrl: 'templates/admin/update.html'
            })
            .when('/delete', {
                templateUrl: 'templates/admin/delete.html'
            })            
            .when('/view/:id', {
                templateUrl: 'templates/admin/viewOne.html'
            })
            .when('/update/:id', {
                templateUrl: 'templates/admin/updateOne.html'
            })
            .when('/delete/:id', {
                templateUrl: 'templates/admin/deleteOne.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });

    /* 
        Root Scope defines main functions and variables used in controllers
        Only one place if we want to change any of the default behaviour 
    */
    app.run(function($rootScope) {
        /* Required for pagination directive */
        $rootScope.currentPage = 1;
        $rootScope.pageSize = 10;    
    });

}());