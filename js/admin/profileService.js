(function() {
    angular
        .module("adminManagerMain")
        .factory('profileService', function($http) {
            var baseUrl = "api/admin/profile/";

            var getSession = function() {
                return $http({
                            method: 'GET',
                            url: baseUrl + 'getSession.php'
                        }).then(successFn, errorFn);
            };

            var getProfile = function() {
                return $http({
                            method: 'GET',
                            url: baseUrl + 'getProfile.php'
                        }).then(successFn, errorFn);
            };

            var updateProfile = function(userData, currentPwd) {
                return $http({
                            method: 'POST',
                            url: baseUrl + 'updateProfile.php',
                            data: { "userData" : userData, "currentPwd": currentPwd }
                        }).then(successFn, errorFn);
            };

            var logoutProfile = function(userData) {
                return $http({
                            method: 'GET',
                            url: baseUrl + 'logout.php'
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
                getSession: getSession, 
                getProfile: getProfile, 
                updateProfile: updateProfile, 
                logoutProfile: logoutProfile
            };
        });
}());