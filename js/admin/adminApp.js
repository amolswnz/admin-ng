(function() {
    var app = angular.module("adminManagerMain", 
                ['ngRoute', 'angularUtils.directives.dirPagination', 'angular-loading-bar', 'ngMessages']);

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
                templateUrl: 'templates/admin/view.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
            })
            .when('/update', {
                templateUrl: 'templates/admin/update.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
            })
            .when('/delete', {
                templateUrl: 'templates/admin/delete.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
            })            
            .when('/view/:id', {
                templateUrl: 'templates/admin/viewOne.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
            })
            .when('/update/:id', {
                templateUrl: 'templates/admin/updateOne.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
            })
            .when('/delete/:id', {
                templateUrl: 'templates/admin/deleteOne.html',
                controller: 'UserController',
                controllerAs: 'userCtrl'
            })
            // .when('/profile', {
            //     templateUrl: 'templates/profile/profile.html',
            //     controller: 'ProfileController',
            //     controllerAs: 'profileCtrl'
            // })
            // .when('/setting', {
            //     templateUrl: 'templates/profile/setting.html',
            //     controller: 'ProfileController',
            //     controllerAs: 'profileCtrl'
            // })
            // .when('/logout', {
            //     templateUrl: 'templates/profile/logout.html',
            //     controller: 'ProfileController',
            //     controllerAs: 'profileCtrl'
            // })            
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