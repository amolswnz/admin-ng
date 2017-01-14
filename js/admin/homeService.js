(function() {
    angular
        .module("adminManagerMain")
        .factory('homeService', function($http) {
            var baseUrl = "api/admin/";

            var getStatistics = function() {
                return $http({
                            method: 'GET',
                            url: baseUrl + 'getStatistics.php'
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
                getStatistics: getStatistics
            };
        });
}());