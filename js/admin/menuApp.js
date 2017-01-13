(function() {

    angular
        .module("menuApp", [])
        .service('sessionService', Session)
        .controller("MenuController", ['sessionService', MenuController])
        
        ;

    function Session($http) {
        var baseUrl = "api/admin/";

        var getSession = function() {
            return $http({
                        method: 'GET',
                        url: baseUrl + 'getSession.php'
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
        };        
    }


    function MenuController(sessionService) {
        var vm = this;
        sessionService.getSession().then(function(response) {
            vm.user = response; 
        });
    }   

}());