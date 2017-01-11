(function() {
    angular
        .module("adminManagerMain")
        .factory('userService', function($http, $routeParams) {
            var baseUrl = "api/admin/";

            var getUsers = function() {
                return $http({
                            method: 'GET',
                            url: baseUrl + 'getUsers.php'
                        }).then(successFn, errorFn);
            };

            var getUser = function(id) {
                return $http({
                            method: 'POST',
                            url: baseUrl + 'getUser.php',
                            data: id
                        }).then(successFn, errorFn);
            };

            var deleteUser = function(id) {
                return $http({
                            method: 'POST',
                            url: baseUrl + 'deleteUser.php',
                            data: id
                        }).then(successFn, errorFn);
            };

            var getOptions = function() {
                return $http({
                            method: 'GET',
                            url: baseUrl + 'getOptions.php'
                        }).then(successFn, errorFn);
            };

            var updateUser = function(userData) {
                return $http({
                            method: 'POST',
                            url: baseUrl + 'updateUser.php',
                            data: userData
                        }).then(successFn, errorFn);
            };

            var successFn = function(response) {
                return response.data;
            }
            var errorFn = function(error) {
                console.warn("Error in GET or POST",error);
                return error.data;
            }

            return {
                getUsers: getUsers, 
                getUser: getUser, 
                deleteUser: deleteUser, 
                getOptions: getOptions, 
                updateUser: updateUser, 
            };
        });
}());