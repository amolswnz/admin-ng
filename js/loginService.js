(function() {
    angular
        .module("adminManager")
        .factory('loginService', function($http) {
            var baseUrl = "api/login/";

            var loginUser = function(loginDetails) {
                return $http({
                            method: 'POST',
                            url: baseUrl + 'loginUser.php',
                            data:  loginDetails 
                        }).then(successFn, errorFn);
            };
            var forgotPassword = function(emailId) {
                return $http({
                            method: 'POST',
                            url: baseUrl + 'forgotPassword.php',
                            data:  emailId 
                        }).then(successFn, errorFn);
            };

            var successFn = function(response) {
                return response.data;
            }
            var errorFn = function(error) {
                console.warn("warn",error);
                return error.data;
            }

            return {
                loginUser: loginUser , 
                forgotPassword: forgotPassword
            };
        });
}());